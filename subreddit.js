$( document ).ready(function() {
  $('#view').click(function(){
    $('#posts').slideToggle("slow");
  });
});


$('#latest').click(function(){
      $.getJSON("http://www.reddit.com/r/technology/new/.json?jsonp=?",function(data){
        var counter = 0;
        $.each(data.data.children, function(i, item){
          if ( i < 20 ) return;
          $("#posts").append( '<div class="indv-post" id="number'+ counter+'">' + '<button id="move-up" type="button">' + 'Move Up' + '</button>' + '<button id="move-down" type="button">' + 'Move Down' + '</button>' +
            '<ul>' + '<li>' + item.data.title + '</li>' + item.data.url  + '</li>' + '<li>' + item.data.permalink + '</li>' + '</ul>' + 
                    '<div class="vote-up-div">' + '<button id="voteup" type="button">' + 'Vote up!' + '</button>' + '<div class="counter" id="voteup">' + '<p></p>' + '</div>' + 
                  '</div>' + '<div class="vote-down-div"> '+ '<button id="votedown" type="button">' + 'Vote down!'  + '</button>' +
              '<div class="counter" id="countdown">' + '</div>' + '</div>' +
            '</div>');
          counter++;
        });
      });
    });


$('.vote-up-div').on("click", "p", function(){
  var clickNum = 0;
  $(this).html(clickNum++);
});

//   $('#voteup').on('click', (function(){
//     var clickNum = 0;
//     $(this).parent().children('.counter').html(clickNum ++);
//   }));
  
//   $('#voteup').on('click', (function(){
//     $(this).parent().children('.counter').html( clickNum ++ );
//   }));
// });

// var reOrder = function() {

// }

$('#move-up').click(function(){
  $(this).parent('.indv-post').insertBefore($(this).parent('.indv-post').prev());
});

$('#move-down').click(function(){
  $(this).parent('.indv-post').insertAfter($(this).parent('.indv-post').next());
});