class Movie < ActiveRecord::Base
	has_many :cast_members
end
