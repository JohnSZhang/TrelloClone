TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "sync add remove change", this.render);
  },

  template: JST['list_show'],

  events: {
    "click .deleteList": "deleteList"
  },

  template: JST['list_show'],

  deleteList: function (event) {
    event.preventDefault();
    var listId = $(event.currentTarget).data('id');
    this.collection.get(listId).destroy({ wait: true })
  },

  render: function () {
    var self = this;
    var content = this.template({ list: this.model });
    this.$el.html(content);
    this.model.cards().each( function (card) {
      var subview = new TrelloClone.Views.Card({
        model: card, collection: self.model.cards() });
      self.addSubview("div.cards", subview);
    })

    var cardNewSubview = new TrelloClone.Views.CardNew({
        collection: this.model.cards(), list: this.model });
    self.addSubview("div.cards", cardNewSubview);


    return this
  }
})