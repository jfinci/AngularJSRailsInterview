namespace :karma  do
  task :start => :environment do
    with_tmp_config :start
  end

  task :run => :environment do
    with_tmp_config :start, "--single-run"
  end

  private

  def with_tmp_config(command, args = nil)
    Tempfile.open('karma_unit.js', Rails.root.join('tmp') ) do |f|
      f.write unit_js(application_spec_files)
      f.flush

      system("./node_modules/karma/bin/karma #{command} #{f.path.shellescape} #{args}") or fail
    end
  end

  def application_spec_files
    environment = Sprockets::Environment.new
    Rails.application.assets.paths.each do |path|
      environment.append_path(path)
    end
    environment.append_path Rails.root.join("spec/karma")
    files = environment.find_asset("application_spec.js").to_a.map {|e| e.pathname.to_s }
  end

  def unit_js(files)
    unit_js = File.open('spec/karma/config/unit.js', 'r').read
    unit_js.gsub "APPLICATION_SPEC", "\"#{files.join("\",\n\"")}\""
  end
end
