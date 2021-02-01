Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :managers
      resources :contacts
      resources :schools
      resources :employees
      resources :equipment_items
      resources :packs
    end
  end
end
