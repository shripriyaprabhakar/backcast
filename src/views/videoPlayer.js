var VideoPlayerView = Backbone.View.extend({
 

  initialize: function() {
    this.collection.on('change', this.render, this);

  },

  render: function() {
    this.$el.html(this.template());
    return this;
    
  },
  
  template: templateURL('src/templates/videoPlayer.html')
  //$('.body')append.()
});
