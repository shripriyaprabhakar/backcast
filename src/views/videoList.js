var VideoListView = Backbone.View.extend({
  
  el: '.video-list',

  initialize: function() {
    // videos is a collection, whose model is Video
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$el.html(this.collection.map(function(video) {
      return new VideoListEntryView({
        model: video
      }).render().el;
    }));
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
