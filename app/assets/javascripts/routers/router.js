TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$el;
  },

  routes: {
    "" : "boardsIndex",
    "boards/new" : "boardNew",
    "boards/:id" : "boardsShow"
  },

  boardsIndex: function () {
    var view = new TrelloClone.Views.BoardsIndex({
      collection: TrelloClone.allBoards,
    });

    this._swapView(view);
  },

  boardsShow: function (id) {
    var view = new TrelloClone.Views.BoardShow({
      model: TrelloClone.allBoards.getOrFetch(id)
    })

    this._swapView(view)
  },

  boardNew: function (id) {
    var view = new TrelloClone.Views.BoardNew({
     collection: TrelloClone.allBoards
    })

    this._swapView(view)
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
})