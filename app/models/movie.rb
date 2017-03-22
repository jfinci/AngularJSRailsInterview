class Movie < ActiveRecord::Base
	has_many :cast_members
	has_many :crew_members
end
