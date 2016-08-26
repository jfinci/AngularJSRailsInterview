FactoryGirl.define do
  factory :cast_member do
    character "John McClane"
    name "Bruce Willis"
    tmdb_id 1234
    movie_id 1234
    profile_path "http://www.imdb.com/character/ch0001752/?ref_=tt_cl_t1"
  end
end

