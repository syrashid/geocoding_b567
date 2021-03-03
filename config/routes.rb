Rails.application.routes.draw do
  resources :friends
  root to: 'pages#home'



# Option 1
# Non CRUD way, NOT RESTFUL
get '/requests', to: 'bookings#requests' # Offers made on my developer or artwork, on what other people have tried to book on your items, add functionality to either accept or reject


# get '/bookings', to: 'bookings#index'  bookings are on what you've tried to book,
resources :bookings, only: :index  # Bookings that I have made, maybe add a review functionality

# Option 2
# CRUD Way, RESTFUL
# DashboardsController would have 1 action, show
# dashboard, to: 'dashboards#show'
resource :dashboard, only: :show

end
