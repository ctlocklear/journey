class AddUserIdToTrips < ActiveRecord::Migration
  def change
  	add_index :trips, :user_id
  end
end
