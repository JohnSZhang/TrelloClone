TrelloClone.Views.Delete = Backbone.View.extend({
  events: {
    "click .deleteBoard": "deleteBoard"
  },

  template: JST["board_delete"],

  deleteBoard: function (event) {
    event.preventDefault();
    var formBoard = $(event.currentTarget).closest();
    this.collection.remove(formBoard.data('id'));
  },

  render: function () {
    var content = this.template({});
    this.$el.append(content);
    return this;
  }
})