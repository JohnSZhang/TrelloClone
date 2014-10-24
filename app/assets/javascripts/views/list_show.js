TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.cards(), "sync add remove change", this.render);
  },

  template: JST['list_show'],

  events: {
    "click .deleteList": "deleteList",
    
  },

  template: JST['list_show'],
  
  update: function (event) {
    console.log(event)
    console.log('hello')
  },

  deleteList: function (event) {
    event.preventDefault();
    var listId = $(event.currentTarget).find('button').data('id');
    console.log(listId)
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

    this.initializeSortable(); 
    return this;
  },
  
  initializeSortable: function () {
      var self = this;
      this.$('#list-' + this.model.get('id') + '-sortable').sortable({ 
          connectWith: ".connected", 
          placeholder: "card-placeholder",
         remove: function (event, ui) {
            self.sortCards();
          },
          update: function (event, ui) {
            self.sortCards();
          }
        });
  },
  
  sortCards: function () {
    var curOrd = 0;
    var cards = this.$('div.card');
    var cardCollection = this.model.cards();
    var listData = [];
    cards.each(function (i) {
      var cardId = $(this).data('id');
      listData.push(cardId)
    });
    this.model.reorder(listData);
  }
});