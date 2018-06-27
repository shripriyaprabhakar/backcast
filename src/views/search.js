var SearchView = Backbone.View.extend({

  
  events: {
    'click .btn': 'handleClick'
  },

  handleClick: function() {
    this.collection.search($('.form-control').val());
    //$('.form-control').val();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});

/////