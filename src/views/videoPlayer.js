var VideoPlayerView = Backbone.View.extend({
 
  el: '.video-player',

  initialize: function() {
    this.collection.on('select', function(video) {
      this.render(video.attributes);
    }, this);
    
  },

  render: function(video) {
    this.$el.html(this.template(video));
    console.log(this.collection);
    return this;
    
  },
  
  template: templateURL('src/templates/videoPlayer.html')
  
});

