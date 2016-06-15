Rails.application.routes.draw do
  root to: 'home#index'
  resources :person, only: %i(index)
end
