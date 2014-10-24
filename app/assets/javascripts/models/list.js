TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: "api/lists",
  parse: function (resp) {
    if(resp.cards) {
      this.cards().set(resp.cards, { parse: true });
      delete resp.cards;
    }
    return resp;
  },

  cards: function () {
    if (!this._cards) {
      this._cards = new TrelloClone.Collections.Cards();
    }
    return this._cards
  },
  reorder: function (order) {
    var self = this;
    $.ajax({
      url: "api/lists/" + this.id + "/order",
      data: { cards: JSON.stringify(order)},
      type: "patch", 
      success: function () {
        self.fetch();
      }
    });
  }
})