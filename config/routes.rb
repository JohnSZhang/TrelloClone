TrelloClone::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit]
    resources :lists, only: [:create, :update, :destroy, :show]
    resources :cards, only: [:create, :update, :destroy]
    patch "lists/:id/order", to: "lists#reorder"
    # resources :items
    # resources :board_memberships
    # resources :card_assignments
  end
end