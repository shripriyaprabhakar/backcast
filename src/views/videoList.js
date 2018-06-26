var VideoListView = Backbone.View.extend({
  
  el: '.video-list',

  initialize: function() {
    this.collection.on('sync', function() {
      this.render();
    }, this);
  },

  // events : {
  //   sync : this.render
  // },

  

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
