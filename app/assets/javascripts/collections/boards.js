TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: "api/boards",

  model: TrelloClone.Models.Board,

  getOrFetch: function (id) {
    var object = this.get(id)
    if(object) {
      object.fetch()
    } else {
      var self = this;
      object = new this.model({ id: id });
      object.fetch({
        success: function () {
          self.add(object);
        }
      })
    }
    return object
  }
});

