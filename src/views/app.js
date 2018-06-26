var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // videos is a collection, whose model is Video
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    
  },


  render: function() {
    // renders the html from the link below
    this.$el.html(this.template());
    // render searchView
    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    }).render();
    // render videoPlayerView
    new VideoPlayerView({
      // el: this.$('.player'),
      // collection: this.videos
    });
    // render videoListView
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
