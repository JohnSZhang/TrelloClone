TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: "api/cards",
  parse: function (resp) {

    if(resp.items) {
      this.items().set(resp.items);
      delete resp.items;
    }
    return resp;
  },

  items: function () {
    if (!this._items) {
      this._items = new TrelloClone.Collections.Items();
    }
    return this._items
  }
})