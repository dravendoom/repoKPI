Rails.application.routes.draw do
  resources :cards
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get "about", to: "about#index"

  root to: "main#index"

  get "dashboard", to: "main#index"

  # Defines the root path route ("/")
  # root "articles#index"
end
