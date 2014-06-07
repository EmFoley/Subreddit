$('#view').click(function(){
  $('#posts').slideToggle("slow", function(){
    $('#latest').click(function(){
          $.getJSON("http://www.reddit.com/r/technology/new/.json?jsonp=?",function(data){
            $.each(data.data.children, function(i, item){
              $("#posts").append( '<li>' + item.data.title + '</li>'
                + item.data.url + '</li>' + '<li>' + item.data.permalink + '</li>' + '<br>');
            });
          });
        });
      });
});


