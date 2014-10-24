# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  board_id   :integer          not null
#  ord        :float            default(0.0)
#  created_at :datetime
#  updated_at :datetime
#

class List < ActiveRecord::Base
  validates :title, :board, :ord, presence: true

  belongs_to :board
  has_many :cards, dependent: :destroy

  default_scope { order(:ord) }
  
  
  def update(cards)
    cards.gsub('[',"").gsub(']',"").split(',').each_with_index do |card, idx|
      puts card
      card = Card.find(card)
      card.list = self unless card.list == self
      card.ord = idx
      card.save
    end
  end
  
end
