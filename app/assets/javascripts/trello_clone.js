window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TrelloClone.allBoards = new TrelloClone.Collections.Boards();
    TrelloClone.allBoards.fetch();
    new TrelloClone.Routers.Router({ $el: $('#main') });
    Backbone.history.start();
  }
};