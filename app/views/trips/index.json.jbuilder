json.array!(@trips) do |trip|
  json.extract! trip, :id, :trip_name, :destination, :user_id
  json.url trip_url(trip, format: :json)
end
