Rails.application.routes.draw do
  root to: 'home#index'
  
  resources :movies, only: %i(index show) do
    resources :cast_members, :crew_members, only: %i(index)
  end
end
