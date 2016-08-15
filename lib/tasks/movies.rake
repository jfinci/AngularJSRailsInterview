namespace :movies do
  task pull: :environment do
    headers = {
      :accept => 'application/json'
    }

    pages = (1..25).to_a
    base_movie_url = 'http://api.themoviedb.org/3/movie/popular?api_key=03c0c493651961ae410bb4a44efaf098&page='
    base_cast_url = 'http://api.themoviedb.org/3/movie/'
    api_key_param = '?api_key=03c0c493651961ae410bb4a44efaf098'

    pages.each do |page|
      url = base_movie_url + page.to_s
      response = JSON.parse(RestClient.get url, headers)
      response = response['results']

      response.each do |from_api|
        movie = Movie.find_or_initialize_by title: from_api['title']
        movie.poster_path = from_api['poster_path']
        movie.overview = from_api['overview']
        movie.tmdb_id = from_api['id']
        movie.release_date = from_api['release_date']
        movie.save!
        puts "----------------------------------#{from_api['title']}----------------------------------"
        puts "PULLING CAST: #{from_api['title']}..."

        cast_response = JSON.parse(RestClient.get base_cast_url + from_api['id'].to_s + '/credits' + api_key_param, headers)
        cast_response = cast_response['cast']
        cast_response.each do |cast|
          puts "SAVED: #{cast['name']} as #{cast['character']}"
          cast_member = CastMember.find_or_initialize_by name: cast['name'], movie_id: movie['id']
          cast_member.character = cast['character']
          cast_member.movie_id = movie['id']
          cast_member.tmdb_id = cast['id']
          cast_member.name = cast['name']
          cast_member.profile_path = cast['profile_path']
          cast_member.save!
        end
        puts '--------------------------------------------------------------------'
      end
    end
  end
end