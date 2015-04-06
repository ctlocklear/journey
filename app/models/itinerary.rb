class Itinerary < ActiveRecord::Base
	belongs_to :trips
	has_many :notes
end
