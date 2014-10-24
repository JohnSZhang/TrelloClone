TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync add remove", this.render)
  },

  events: {
    "click .delete-board": "deleteBoard"
  },

  template: JST["board_index"],

  render: function () {
    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    var subview = new TrelloClone.Views.BoardNew({ collection: this.collection });
    this.addSubview("ul.boards", subview);
    return this;
  },

  deleteBoard: function (event) {
    event.preventDefault();
    var boardId = $(event.currentTarget).data('id');
    this.collection.get(boardId).destroy({ wait: true })
  }

})