class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :trip_name
      t.string :destination
      t.references :user

      t.timestamps null: false
    end
  end
end
