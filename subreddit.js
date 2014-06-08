// $(function () {
  $('#view').click(function(){
    $('#posts').slideToggle("slow");
  });


  $('#latest').click(function(){
        $.getJSON("http://www.reddit.com/r/technology/new/.json?jsonp=?",function(data){
          var counter = 0;
          $.each(data.data.children, function(i, item){
            if ( i < 20 ) return;
            $("#posts").append( '<div class="indv-post" id="number'+ counter+'">' + '<ul>' + '<li>' + item.data.title + '</li>'
              + item.data.url  + '</li>' + '<li>' + item.data.permalink + '</li>' + '</ul>' + 
              '<div class="vote-up-div">' + '<button id="voteup" type="button">' + 'Vote up!' + '</button>' + '<div class="counter" id="countup">' + '</div>' + '</div>' + '<div class="vote-down-div"> '+ '<button id="votedown" type="button">' + 'Vote down!'  + '</button>' +
              '<div class="counter" id="countdown">' + '</div>' + '</div>' +
              '</div>');
            counter++;
          });
        });
      });

        // $('#voteup').on("click", function() {
        //   $('#countup').html(function(i, val) { return +val+1 });
        //   });
        //  $("#down").click(function() {
        //   $('#countdown').html(function(i, val) { return +val+1 });
        //    });
      
   // $(".vote-up-div").click(function() {
   //  console.log("anything");
   
   // });
   // $(".votedown").on("click",function() {
   //     $('this').find('.counter').html("function(i, val) { return +val+1 }");
   // });

 // });

