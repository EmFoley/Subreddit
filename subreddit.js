$('#view').click(function(){
  $('#posts').slideToggle("slow", function(){
    $('#latest').click(function(){
          $.getJSON("http://www.reddit.com/r/technology/new/.json?jsonp=?",function(data){
            $.each(data.data.children, function(i, item){
              if ( i < 20 ) return;
              $("#posts").append( '<div class="indv-post">' + '<ul>' + '<li>' + item.data.title + '</li>'
                + item.data.url + '</li>' + '<li>' + item.data.permalink + '</li>' + '</ul>' + '</div>');
            });
          });
        });
      });
});


