class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :trip_name
      t.string :destination
      t.string :user_id

      t.timestamps null: false
    end
  end
end
