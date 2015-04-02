class CreateItineraries < ActiveRecord::Migration
  def change
    create_table :itineraries do |t|
      t.string :activity_name
      t.string :location
      t.string :time_of_event
      t.string :foursqaure_id
      t.references :trip

      t.timestamps null: false
    end
  end
end
