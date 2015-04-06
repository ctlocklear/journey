class ProfilesController < ApplicationController
  def show

  	@user = User.find_by_email(params[:id])
  	if @user 
  		render action: :show
  		@trips = Trips.all
  	else

  	render file 'public/404', status: 404, formats: [:html]
  end
  end
end
