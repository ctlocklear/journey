class CreateItineraries < ActiveRecord::Migration
  def change
    create_table :itineraries do |t|
      t.string :activity_name
      t.string :location
      t.string :time_of_event
      t.string :foursqaure_id
      t.string :trip_id

      t.timestamps null: false
    end
  end
end
