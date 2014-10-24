TrelloClone.Views.Card = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST['card_show'],

  events: {
    "click .deleteCard": "deleteCard",
    "click .toggle-modal": "toggleModal"
  },

  deleteCard: function (event) {
    event.preventDefault();
    var cardId = $(event.currentTarget).data('id');
    this.collection.get(cardId).destroy({ wait: true })
  },

  toggleModal: function (event) {
    event.preventDefault();
    this.$('div.card-modal').toggleClass('active');
  },

  render: function () {
    var self = this;
    var content = this.template({ card: this.model });
    this.$el = $(content);
    this.model.items().each( function (item) {
      var subview = new TrelloClone.Views.Item({ model: item });
      self.addSubview("ul.items", subview);
    });
    return this
  }

})