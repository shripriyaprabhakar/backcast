var VideoPlayerView = Backbone.View.extend({
 
  el: '.player',

 initialize: function() {
  //   this.collection.on('select', function() {
     this.render();
  //   }, this);
    
  },

  render: function() {
    this.$el.html(this.template());
    console.log(this.collection);
    return this;
    
  },
  
  template: templateURL('src/templates/videoPlayer.html')
  
});
