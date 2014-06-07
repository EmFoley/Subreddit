$('#view').click(function(){
  $('#posts').slideToggle("slow", function(){
    $('#latest').click(function(){
          $.getJSON("http://www.reddit.com/r/technology/new/.json?jsonp=?",function(data){
            $.each(data.data.children, function(i, item){
              if ( i < 20 ) return;
              $("#posts").append( '<div class="indv-post">' + '<ul>' + '<li>' + item.data.title + '</li>'
                + item.data.url  + '</li>' + '<li>' + item.data.permalink + '</li>' + '</ul>' + 
                '<button class="vote" id="up" type="button">' + 'Vote up!' + '</button>' + '<div class="counter" id="countup">' + '</div>' + '<button class="vote" id="down" type="button">' + 'Vote down!'  + '</button>' +
                '<div class="counter" id="countdown">' + '</div>' +
                '</div>');

              $("#up").click(function() {
                  $('#countup').html(function(i, val) { return +val+1 });
              });
              $("#down").click(function() {
                  $('#countdown').html(function(i, val) { return +val+1 });
              });
                  
            });
          });
        });
      });
});

// $('#up').click(function(){
//   $('#countup').html(function(i, val) { return val*1+1 });
// });

