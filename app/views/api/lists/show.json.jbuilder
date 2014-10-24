json.title @list.title
json.cards @list.cards do |card|
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


