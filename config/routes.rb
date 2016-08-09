Rails.application.routes.draw do
  root to: 'home#index'
  resources :person, only: %i(index)
  resources :movie, only: %i(index)
  resources :cast_member, only: %i(index)
end
