TrelloClone.Views.Item = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST['item_show'],
  render: function () {
    var content = this.template({ item: this.model });
    this.$el = $(content);
    return this;
  }
})