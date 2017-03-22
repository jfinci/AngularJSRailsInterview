class AddCrewMembersTable < ActiveRecord::Migration
  def change
    create_table :crew_members do |t|
    	t.string :job
      t.string :department
    	t.integer :movie_id, null: false
    	t.integer :tmdb_id, null: false
    	t.string :name, null: false
    	t.string :profile_path
    	t.timestamps null: false
    end

    add_foreign_key :crew_members, :movies
  end
end
