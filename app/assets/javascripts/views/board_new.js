TrelloClone.Views.BoardNew = Backbone.View.extend({
  events: {
    "click .createBoard": "createBoard"
  },

  template: JST["board_new"],

  createBoard: function (event) {
    event.preventDefault();
    var newBoard = $(event.currentTarget).parent().serializeJSON();
    this.collection.create(newBoard, {
      success: function () {
        Backbone.history.navigate("", { trigger: true });
      }
    });
  },

  render: function () {
    var content = this.template();
    this.$el.append(content);
    return this;
  }
})