TrelloClone.Views.ListNew = Backbone.View.extend({
  initialize: function (options) {
    this.board = options.board;
  },

  events: {
    "click .createList": "createList"
  },

  template: JST["list_new"],

  createList: function (event) {
    event.preventDefault();
    var newList = $(event.currentTarget).parent().serializeJSON();
    this.collection.create(newList, {
      success: function () {

      }
    });
  },

  render: function () {
    var content = this.template({ board: this.board });
    this.$el.append(content);
    return this;
  }
})