var VideoPlayerView = Backbone.View.extend({
 
  el: '.video-player',

  initialize: function() {
    this.collection.on('select', function() {
      this.render();
    }, this);
    
  },

  

  render: function() {
    this.$el.html(this.template(/*PASSS SOMETHING HERE*/));
    console.log(this.collection);
    return this.$el;
    
  },
  
  template: templateURL('src/templates/videoPlayer.html')
  
});
