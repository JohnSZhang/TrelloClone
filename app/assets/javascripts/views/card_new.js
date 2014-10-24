TrelloClone.Views.CardNew = Backbone.View.extend({
  initialize: function (options) {
    this.list = options.list;
  },

  events: {
    "click .create-card": "createCard",
    "click a.toggle-new-card": "newCardForm"
  },

  template: JST["card_new"],

  createCard: function (event) {
    event.preventDefault();
    var self = this;
    var newCard = $(event.currentTarget).parent().serializeJSON();
    this.collection.create(newCard, { wait: true });

  },

  render: function () {
    var content = this.template({ list: this.list });
    this.$el.append(content);
    return this;
  },
  
  newCardForm: function (event) {
    console.log('clicked')
    event.preventDefault();
    console.log()
    this.$('.toggle-new-card.default').toggleClass('active');
    this.$('form').toggleClass('active');
  }
  
})