$(function() {
    console.log("DOM is loaded");

    var windowWidth = $(window).width;
    var windowHeight = $(window).height;

    console.log("the document width " + windowWidth);

    console.log("the document height " + windowHeight);


//    logic here

  $('#red').click(function(){
  $('#ball').css("background","red");
  });

  $('#blue').click(function(){
  $('#ball').css("background","blue");
  });

  $('#green').click(function(){
  $('#ball').css("background","green");
  });

  $('#hideShow').click(function(){
  console.log("check!")
  $('#ball').toggle();
  });

  $('#left').click(function(){
  console.log("Move left!")
  $('#ball').animate({
    'marginLeft':'-=100px'
    });
  })
  $('#right').click(function(){
  console.log("Move right!")
  $('#ball').animate({
    'marginLeft':'+=100px'
    });
  })
  $('#top').click(function(){
  console.log("Move top!")
  $('#ball').animate({
    'bottom':'+=100px'
    });
  })
  $('#bottom').click(function(){
  console.log("Move bottom!")
  $('#ball').animate({
    'bottom':'-=100px'
    });
  })

});

//     $('#myDiv').html("Goodbye " + user);
//     $('#myDiv').css("color","red");
//     $('.feature').css("color", "blue");
//     // $('.feature').addClass("highlighted");
//     $(".feature").append("<p>").append("<b>This is a sub-article</b>")
//     $(".feature").hide();
//     $(".feature").show();
//
//  setInterval(function(){
//    $('.feature').toggleClass("highlighted");},5000);
// });
//
// $('.feature').click( function(){
//   $(this).toggleClass("highlighted");
// })
//
// $('.feature').on('click',function(){
//   $(this).toggleClass("highlighted");
// });
