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
      el: '.search',
      collection: this.videos
    }).render();
    // render videoPlayerView
    new VideoPlayerView({
      el: '.player',
      collection: this.videos
    }).render(this.videos.models[0].attributes);
    // render videoListView
    new VideoListView({
      el: '.list',
      collection: this.videos
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
