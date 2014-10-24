TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.lists(), 'sync add remove', this.render);
  },

  template: JST['board_show'],

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    var self = this;
    this.model.lists().each(function (list) {
      var listSubview = new TrelloClone.Views.ListShow({
        model: list,
        collection: self.model.lists() });
      self.addSubview("section.all-lists", listSubview);
    });
    var listNewSubview = new TrelloClone.Views.ListNew({
        collection: this.model.lists(), board: this.model });
    self.addSubview("section.all-lists", listNewSubview);


    return this;
  }


});