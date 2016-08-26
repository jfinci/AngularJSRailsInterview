FactoryGirl.define do
  factory :movie do
    title "Die Hard"
    poster_path "http://ia.media-imdb.com/images/M/MV5BYmY2ZGEwMTYtNjBmZS00OGE4LWEyMmUtNjAwMWUxZjVmZTRiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,637,1000_AL_.jpg"
    overview "John McClane, officer of the NYPD, tries to save his wife Holly Gennaro and several others that were taken hostage by German terrorist Hans Gruber during a Christmas party at the Nakatomi Plaza in Los Angeles."
    tmdb_id 4444
    release_date "1988-08-03 15:22:21"
    cast_members { build_list :cast_member, 3 }
  end
end
