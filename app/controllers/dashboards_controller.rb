class DashboardsController < ApplicationController
  def show
    # Search through bookings on developers/artwork THAT I OWN
    @requests = Bookings.where(???)

    # Search through bookings for developers/artwork THAT I MADE
    @my_bookings = Bookings.where(???)
  end
end
