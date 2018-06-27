var Videos = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search',

  model: Video,

  
  /*fetch: function(dataObj){

    $.ajax({S
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: dataObj,
      type: 'GET',
      // contentType: 'application/json',
      //q: string, // MAYBE CHECK LATER 
      // maxResults: 5,
      // videoEmbeddable: true,S
      // part: 'snippet',
      success: function (data) {
        console.log(this);
        console.log('our data', data);
        //this.parse(data);
      },
      error: function (data) {
        console.error();
      }
    });
  },*/


   

  search: function(string){
    //var context = this;
    //debugger;
    //this.fetch({q: string, part: 'snippet', key: window.YOUTUBE_API_KEY});
    this.fetch(
      {
        data: {
          q: string, 
          part: 'snippet',
          key: window.YOUTUBE_API_KEY,
          maxResults: '5',
          videoEmbeddable: 'true',
          type: ''
        },
        dataType: 'json',
        type: 'GET',
        success: function(data) {
          console.log('success');
          // context.collection = data;
          // context.collection.trigger('sync');
        },
        error: function(data) {
          console.log('error');
          
        } 
      });
  },
  
  
 
  
  parse: function(dataObj) {
    return dataObj.items;
  }
  
});



