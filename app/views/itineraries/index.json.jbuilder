json.array!(@itineraries) do |itinerary|
  json.extract! itinerary, :id, :activity_name, :location, :time_of_event, :foursqaure_id, :trip_id
  json.url itinerary_url(itinerary, format: :json)
end
