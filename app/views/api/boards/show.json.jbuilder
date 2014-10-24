# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.title @board.title
json.lists @board.lists do |list|
  json.id list.id
  json.ord list.ord
  json.title list.title
  json.cards list.cards do |card|
    json.id card.id
    json.ord card.ord
    json.title card.title
    json.description card.description
    json.items card.items do |item|
      json.id item.id
      json.title item.title
      json.done item.done
    end
  end
end

