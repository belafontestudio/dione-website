Parse.initialize("AKSUebdxKe82i1QR4WZZTXpog6pWMo5FEAo3dPk0", "Hf6uvBRtwY4se7DKWfqckvFkpN4TktNb9PpKdXc9");


var pinsPositions =
{
  // // >600px - orizzontal
  // "11":{x:49,y:41.5},
  // "12":{x:49,y:53.5},
  // "16":{x:49,y:31.5},
  //
  // "122":{x:49,y:41.5},
  //
  // "21":{x:49,y:18},
  // "22":{x:49,y:41},
  // "24":{x:49,y:49},
  // "241":{x:45,y:31},
  //
  // "25":{x:51,y:34},
  // "26":{x:45,y:65},
  // "27":{x:53,y:65},
  // "220":{x:49,y:50},
  // "221":{x:49,y:41},
  //
  // "222":{x:49,y:41},
  //
  //
  // "31":{x:48.5,y:6.2},
  // "32":{x:53.5,y:43},
  // "33":{x:43,y:57},
  // "331":{x:53.5,y:57},
  // "34":{x:43,y:41},
  // "35":{x:43,y:50},
  // "36":{x:43,y:67.5},
  // "37":{x:53,y:67.5},
  //
  // "38":{x:43,y:44.5},
  // "39":{x:43,y:52.7},
  // "310":{x:43,y:60.7},
  // "311":{x:53.5,y:52},
  // "312":{x:54.5,y:60.6},
  // "313":{x:54.5,y:63},
  //
  // "315":{x:48.5,y:20},


  // <600px - vertical
  "11":{x:40,y:47.5}, //
  "12":{x:51,y:47.5}, //
  "16":{x:49,y:31.5},

  "122":{x:49,y:41.5},

  "21":{x:15,y:47.5}, //
  "22":{x:39,y:47.7}, //
  "24":{x:49,y:48},   //
  "241":{x:29,y:52},  //

  "25":{x:36,y:45.5}, //
  "26":{x:68,y:52},
  "27":{x:68,y:43},
  "220":{x:49,y:48},  //
  "221":{x:39,y:48},  //

  "222":{x:39,y:48},  //


  "31":{x:1,y:48}, //
  "32":{x:41.5,y:42}, //
  "33":{x:57.5,y:54},  //
  "331":{x:57.5,y:42},  //
  "34":{x:40,y:55}, //
  "35":{x:50,y:55},  //
  "36":{x:68,y:53.5}, //
  "37":{x:68,y:43.5}, //

  "38":{x:52,y:42.5}, //
  "39":{x:61,y:42.5}, //
  "310":{x:64,y:42.5}, //
  "311":{x:43,y:54.7},  //
  "312":{x:52.5,y:54.7},  //
  "313":{x:61,y:54.7},   //

  "315":{x:14.5,y:49},  //



}

//Resize
$( window ).resize(function() {

  $.modal.resize();
  if($(".fullpage-wrapper")[0]){
    $.fn.fullpage.reBuild();
  }

  //change plan image
  if($(window).width() <= 600){

    $('#sundeck > img').attr('src', '../images/tech/64_planimetria/planimetria_sun.jpg');
    $('#maindeck > img').attr('src', '../images/tech/64_planimetria/planimetria_main.jpg');
    $('#lowerdeck > img').attr('src', '../images/tech/64_planimetria/planimetria_lower.jpg');

  }else{

    $('#sundeck > img').attr('src', '../images/tech/64_planimetria/planimetria_sun_or.jpg');
    $('#maindeck > img').attr('src', '../images/tech/64_planimetria/planimetria_main_or.jpg');
    $('#lowerdeck > img').attr('src', '../images/tech/64_planimetria/planimetria_lower_or.jpg');

  }

});

var pathname = window.location.pathname;
var loginUrl = "/pages/login.html";
var registerUrl = "/register.html";
checkPrivatePage();




enquire.register("screen and (max-width:480px)", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
        console.log("match mobile");
        checkPage("mobile");


    },
    unmatch : function() {
        console.log("unmatch mobile");
        if($(".fullpage-wrapper")[0]){
          $.fn.fullpage.destroy('all');
        }
    }

});
enquire.register("screen and (min-width: 480px)", {
    match : function() {
        console.log("match web");

        checkPage("web");
    },
    unmatch : function() {
        console.log("unmatch web");
        if($(".fullpage-wrapper")[0]){
         $.fn.fullpage.destroy('all');
        }
    }
});

function filterMenu(){
    $("a.filter").each(function(){
        $(this).click(function(e){
            e.stopPropagation();
            var id = $(this).attr('id');
            var target = id.slice(-1);
            activeFS(target);
            activeLI(target);
            e.preventDefault();
            $("div.filter-opened-section").slideDown();
        });
    });
}
function activeFS(target){
    var counter = 1;

        $('section.filter-hide').each(function(){
            if (counter != target){
                $(this).fadeOut(0);

            }else{
                $(this).delay(500).fadeIn(1000);

            }

            counter++;
        });
}
function activeLI(target){
    var counter = 1;

        $('a.filter').each(function(){
            if (counter != target){
                $(this).parent().removeClass("active");

            }else{
                $(this).parent().addClass("active");

            }

            counter++;
        });
};
function guestSlider(){
    $( "#slider-guest" ).slider({
      range: true,
      min: 1,
      max: 15,
      step: 1,
      values: [ 1, 15],
      slide: function( event, ui ) {
        $( "p.min-guest" ).text( ui.values[ 0 ] + "guests" );
        $( "p.max-guest" ).text( ui.values[ 1 ] + "guests");

      }
    });
    $( "p.min-guest" ).text( $( "#slider-guest" ).slider( "values", 0 )+ "guests");
    $( "p.max-guest" ).text( $( "#slider-guest" ).slider( "values", 1 )+ "guests");
}
function rangeSlider(){
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      step: 5,
      values: [ 0, 500 ],
      slide: function( event, ui ) {
        $( "p.min-price" ).text( "€" + ui.values[ 0 ] + "k" );
        $( "p.max-price" ).text( "€" + ui.values[ 1 ] + "k");

      }
    });
    $( "p.min-price" ).text( "€" + $( "#slider-range" ).slider( "values", 0 )+ "k");
    $( "p.max-price" ).text( "€" + $( "#slider-range" ).slider( "values", 1 )+ "k");
}


$(document).ready(function() {
    preventPrivateSection();
    logoutButton();
    planSetup();
    getPlanPins();


    $(document).keydown(function(e) {
    switch(e.which) {
        case 83: // up
            logout();
        break;
        case 65:
            login("equinoxe","3qu1n0x3");
        break;
    }
    //e.preventDefault(); // prevent the default action (scroll / move caret)






});

    //login forn
    $("#login-form").find(".btn").click(function(e){
        e.stopPropagation();
        var username = $("#login-username").val();
        var password = $("#login-password").val();

        e.preventDefault();
        login( username, password);
    });

  $(".section .slide a.button").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    var selection = $(this).attr("href");
    var section = selection.substring(1, 2);
    var slide = selection.substring(2);
    console.log(section,slide)
    $.fn.fullpage.moveTo(section,slide);

  });
    $('#plan-modal').on($.modal.CLOSE, function(event, modal) {
      console.log("Pins cleaned")
      cleanPins();
    })


    filterMenu();
    rangeSlider();
    guestSlider();
    $( "#slider-single" ).slider({
         min: 0,
         max: 2,
         step: 1,
         slide: function( event, ui ) {
          switch (ui.value){
            case 0:
              $("#filter-yacht").fadeIn(1000);
              $("#filter-super-yacht").fadeOut(400);
              $("#filter-mega-yacht").fadeOut(400);
            break;
            case 1:
              $("#filter-yacht").fadeOut(400);
              $("#filter-super-yacht").fadeIn(1000);
              $("#filter-mega-yacht").fadeOut(400);
            break;
            case 2:
              $("#filter-yacht").fadeOut(400);
              $("#filter-super-yacht").fadeOut(400);
              $("#filter-mega-yacht").fadeIn(1000);
            break;
          }



        }
       });

    $('#enquire-modal').on($.modal.OPEN, function(event, modal) {

        if($(".fullpage-wrapper")[0]){
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        }
        $.sidr("close");
    });
    $('#enquire-modal').on($.modal.CLOSE, function(event, modal) {
        if($(".fullpage-wrapper")[0]){
            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);
        }
    });


    $('#simple-menu').sidr({
        displace: true,
        onOpen : menuOpen,
        onClose : menuClose
    });


    function menuOpen() {
        var menu = $('a#simple-menu');
        menu.addClass('hide');
        if (menu.hasClass('show')){
            menu.removeClass('show');
        }
        var hmenu = $('div#landing-menu div.center');

        if (!hmenu.hasClass('hide')){
            hmenu.addClass('hide');
        }
        if (hmenu.hasClass('show')){
            hmenu.removeClass('show');
        }


    };
    function menuClose() {
        var menu = $('a#simple-menu');
        menu.addClass('show');
        if (menu.hasClass('hide')){
            menu.removeClass('hide');
        }
        var hmenu = $('div#landing-menu div.center');

        if (!hmenu.hasClass('show')){
            hmenu.addClass('show');
        }
        if (hmenu.hasClass('hide')){
            hmenu.removeClass('hide');
        }
    };

    $('a#closeMenu').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $.sidr("close");
    });

});
function createLanding(){
    $('#onepage').fullpage({
        menu: '#anchor-menu',
        anchors:['home','yacht', 'outside','bimini','fly', 'stern'],
        resize: false,
        autoScrolling: true,
        scrollOverflow: false,
        scrollBar: false,
        responsive: 480,

        loopTop: false,
        loopHorizontal: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        afterLoad: function(anchorLink, index){
            var hmenu = $('div#landing-menu div.center')
            //using anchorLink


                if (!hmenu.hasClass('show')){
                    hmenu.addClass('show');
                }
                if (hmenu.hasClass('fast-hide')){
                    hmenu.removeClass('fast-hide');
                }


        },
        afterRender: function(){
            console.log("test");
           $(".fp-section").height("auto")
           $(".fp-section").css("minHeight",$( window ).height()+"px")
           $(".fp-tableCell").height($( window ).height())
           $(".fp-tableCell").css("padding","100px 0")

        },
        onLeave: function(index, nextIndex, direction){
            var hmenu = $('div#landing-menu div.center')

                hmenu.addClass('fast-hide');
                if (hmenu.hasClass('show')){
                    hmenu.removeClass('show');
                }
                if(direction =='down'){
                    //Going to section 2!
                    $('#section'+nextIndex).find('.slide').addClass('loadImage');
                }
                 if(direction =='up'){
                        //Going to section 2!
                        if(!$('#section'+nextIndex).find('.slide').hasClass('loadImage')){
                            $('#section'+nextIndex).find('.slide').addClass('loadImage');
                        }
                    }


        }

    });
}
function hasFullPage(page){
    $(arrayFullPage).each(function(){

    });
}



function checkPage(size){
    hidePrivateSection();
    var pathArray = window.location.pathname.split( '/' );
    if (pathArray[2] == "landing.html"){
        createLanding();



    }else if(pathArray[2] == "inside.html"){
        $('a#m1').addClass("active");
        $('#onepage').fullpage({
            menu: '#anchor-menu',
            anchors:['inside','dining', 'living','maindeck','owner', 'twincab', 'guest','office','bathrooms','inside-crew'],
            resize: false,
            autoScrolling: true,
            scrollOverflow: true,
            scrollBar: false,
            responsive: 480,
            loopTop: false,
            loopHorizontal: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',

            onLeave: function(index, nextIndex, direction){

                if(direction =='down'){
                    //Going to section 2!
                    $('.section'+nextIndex).find('.slide').addClass('loadImage');
                }
                 if(direction =='up'){
                        //Going to section 2!
                        if(!$('.section'+nextIndex).find('.slide').hasClass('loadImage')){
                            $('.section'+nextIndex).find('.slide').addClass('loadImage');
                        }
                    }

            }



        });
    }else if(pathArray[2] == "life_on_board.html"){
            $('a#m1').addClass("active");
            $('#onepage').fullpage({
                menu: '#anchor-menu',
                anchors:['lifeonboard','ondeck', 'cabins','mingle','tendersandtoys'],
                resize: false,
                autoScrolling: true,
                scrollOverflow: true,
                scrollBar: false,
                responsive: 480,
                loopTop: false,
                loopHorizontal: false,
                slidesNavigation: true,
                slidesNavPosition: 'bottom',
                onLeave: function(index, nextIndex, direction){

                    if(direction =='down'){
                        //Going to section 2!
                        $('.section'+nextIndex).find('.slide').addClass('loadImage');
                    }
                    if(direction =='up'){
                        //Going to section 2!
                        if(!$('.section'+nextIndex).find('.slide').hasClass('loadImage')){
                            $('.section'+nextIndex).find('.slide').addClass('loadImage');
                        }
                    }


                }



            });
    }else if(pathArray[2] == "logbook.html"){
        $('a#m1').addClass("active");
            $('#onepage').fullpage({
                menu: '#anchor-menu',
                anchors:['logbook','comfortandsafety', 'standards','homefromhome','cruising','crew'],
                resize: false,
                autoScrolling: true,
                scrollOverflow: true,
                scrollBar: false,
                responsive: 480,
                loopTop: false,
                loopHorizontal: false,
                slidesNavigation: true,
                slidesNavPosition: 'bottom',
                onLeave: function(index, nextIndex, direction){

                    if(direction =='down'){
                        //Going to section 2!
                        $('.section'+nextIndex).find('.slide').addClass('loadImage');
                    }
                    if(direction =='up'){
                        //Going to section 2!
                        if(!$('.section'+nextIndex).find('.slide').hasClass('loadImage')){
                            $('.section'+nextIndex).find('.slide').addClass('loadImage');
                        }
                    }
                }



            });
    }else if(pathArray[2] == "events.html"){
        $('a#m1').addClass("active");
            $('#onepage').fullpage({
                menu: '#anchor-menu',
                anchors:['events','formal'],

                resize: false,
                autoScrolling: true,
                scrollOverflow: true,
                scrollBar: false,
                responsive: 480,
                loopTop: false,
                loopHorizontal: false,
                slidesNavigation: true,
                slidesNavPosition: 'bottom',
                onLeave: function(index, nextIndex, direction){

                    if(direction =='down'){
                        //Going to section 2!
                        $('.section'+nextIndex).find('.slide').addClass('loadImage');
                    }
                }



            });
    }else if(pathArray[2] == "specs.html"){
        $('a#m1').addClass("active");
            $('#onepage').fullpage({
                menu: '#anchor-menu',
                anchors:['specs','range', 'ample'],

                resize: false,
                autoScrolling: true,
                scrollOverflow: true,
                scrollBar: false,
                responsive: 480,
                loopTop: false,
                loopHorizontal: false,
                slidesNavigation: true,
                slidesNavPosition: 'bottom',
                onLeave: function(index, nextIndex, direction){

                    if(direction =='down'){
                        //Going to section 2!
                        $('.section'+nextIndex).find('.slide').addClass('loadImage');
                    }
                }



            });
    }else if(pathArray[2] == "login.html"){
        $('a#m1').addClass("active");
        $('div#hslide1').fadeIn(1000);
            $('#onepage').fullpage({
                menu: '#anchor-menu',
                anchors:['login'],

                resize: false,
                autoScrolling: true,
                scrollOverflow: true,
                scrollBar: false,
                responsive: 480,
                loopTop: false,
                loopHorizontal: false,
                slidesNavigation: true,
                slidesNavPosition: 'bottom',


            });
    }else{
        $("html").css("overflow","visible");
        $("body").css("overflow","visible");

    }

}


function homeSlides(){
    $('div#hslide1').fadeIn(1000);
    $('p#statement1').fadeIn(1000);
    $('a#m1').addClass("active");

}


// DROPDOWN

$('#dropdown-selector').hover(function() {
  $('#dropdown-menu').stop().fadeIn( "slow", function() {
    $("#m20").css("color","light-blue !important");
  })
}, function(){
  $('#dropdown-menu').stop().fadeOut( "slow", function() {
    // Animation complete.
  })
});



//PARSE


function checkUrl(url){
    console.log(url);
    if (url != ""){
      return true;
    }else{
      return false
    }
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function currentUser(){
    var currentUser = Parse.User.current();
    console.log(JSON.stringify(currentUser));
}

function isLoggedIn(){
    var currentUser = Parse.User.current();
    if (currentUser) {
        return true
    } else {
        return false
    }
}
function checkUser(url, link){
    var currentUser = Parse.User.current();
    if (currentUser) {
        window.location = link;
    } else {

        window.location = url+"?url="+encodeURIComponent(link);

    }
}
function logout(){
    Parse.User.logOut();
    console.log("logout")
}




function login(username,password){
    Parse.User.logIn(username, password, {
        success: function(user) {

            //var activation = activate(user._serverData.emailVerified);
            var url = getParameterByName('url');
            currentUser();
            //if (activation){
                checkedUrl = checkUrl(url);

                if(checkedUrl){
                    window.location = url;
                }else{
                    window.location = "/pages/landing.html";
                }

            //}
            $("#success").delay(500).fadeIn();
            $('#error').fadeOut();

        },
        error: function(user, error) {

            $("#error").delay(500).fadeIn();
            $('#success').fadeOut();
        }
    });
}



function signup(username, company, email, password){
    var user = new Parse.User();
    user.set("username", email);
    user.set("name_lastname", username);
    user.set("password", password);
    user.set("company", company);
    user.set("email", email);
    user.signUp(null, {
        success: function(user) {
            $("#success").fadeIn();

            window.location = soluzioniUrl;

        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            $("#error").text("Error: " + error.code + " " + error.message).fadeIn();

        }
    });
}

function checkPrivatePage(){
    console.log(window.location.pathname)
        if(window.location.pathname == "/pages/inside.html"){

        var currentUser = Parse.User.current();
        if (currentUser) {

        } else {
            window.location = loginUrl+"?url="+encodeURIComponent(pathname);

        }

    }
}




function activateButtons(){
    $("a.prevent").removeClass("prevent");
}
function preventPrivateSection(){
    $("a.prevent").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        var link = $(this).attr("href");
        checkUser(loginUrl,link)
    })

}

function logoutButton(){
    $("li.logout a").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        console.log("logout button clicked")
        logout();
        location.reload();
    })

}
function hidePrivateSection(){
    var isLogged = isLoggedIn();
    if(!isLogged){
        $("li.logout a").hide();
        $("li.login a").show();
        $(".slide.alone").each(function(){
            var html = $(this).html();
            var id = $(this).attr("id");

            $(this).parent().attr("id",id).html(html);
            $(this).remove();
        })
       $(".slide.private").each(function(){
        $(this).remove();
        })
    }else{
        activateButtons();
        $("li.logout a").show();
        $("li.login a").hide();
       }


}


// Planimetria

// function select_plan(target){
//     var counter = 1;
//
//         $('#menu-plan > li > a').each(function(){
//             if (counter != target){
//                 $('#plan-modal > div').removeClass("unactive");
//
//             }else{
//                 $(this).parent().addClass("active");
//
//             }
//
//             counter++;
//         });
// };


function cleanPins(){
    $("#sundeck").find(".dot").remove();
    $("#maindeck").find(".dot").remove();
    $("#lowerdeck").find(".dot").remove();
}

function getPlanPins(){
    $(document).on('click', 'a.see-plan', function(e) {
         e.stopPropagation();
            var deck = $(this).attr("data-deck");
            var pins = $(this).attr("data-pin");
            displayPins(pins);
            displayDeck(deck);
        });

}
function displayPins(pins){
    var pinsArray = JSON.parse("[" + pins + "]")
    for (var i in pinsArray) {
      var pin = pinsArray[i].toString();

      var pinDeck = pin.substring(0,1);

      console.log(pin,pinDeck, pinsPositions[pin].x,pinsPositions[pin].y);
          switch(parseInt(pinDeck)){
            case 1:
                $("#sundeck").prepend('<div class="dot" style="top:'+pinsPositions[pin].x+'%; left:'+pinsPositions[pin].y+'%"></div>');
            break;
            case 2:
                $("#maindeck").prepend('<div class="dot" style="top:'+pinsPositions[pin].x+'%; left:'+pinsPositions[pin].y+'%"></div>');
            break;
            case 3:
                $("#lowerdeck").prepend('<div class="dot" style="top:'+pinsPositions[pin].x+'%; left:'+pinsPositions[pin].y+'%"></div>');
            break;
        }
    }


}
function displayDeck(deck){

    switch(parseInt(deck)){
        case 1:
            $('#sundeck').fadeIn();
            $('#maindeck, #lowerdeck').fadeOut();

            $('#btn_sun').addClass('active');
            $('#btn_main, #btn_low').removeClass('active');
        break;
        case 2:
            $('#maindeck').fadeIn();
            $('#sundeck, #lowerdeck').fadeOut();

            $('#btn_main').addClass('active');
            $('#btn_sun, #btn_low').removeClass('active');
        break;
        case 3:
            $('#lowerdeck').fadeIn();
            $('#sundeck, #maindeck').fadeOut();

            $('#btn_low').addClass('active');
            $('#btn_sun, #btn_main').removeClass('active');
        break;
        default:

            $('#sundeck').fadeIn();
            $('#maindeck, #lowerdeck').fadeOut();

            $('#btn_sun').addClass('active');
            $('#btn_main, #btn_low').removeClass('active');
        break;
    }
}

// Switch Plan
function planSetup(){

    $('#btn_sun').on('click', function(e){
        e.preventDefault();
         e.stopPropagation();
      $('#sundeck').fadeIn();
      $('#maindeck, #lowerdeck').fadeOut();

      $('#btn_sun').addClass('active');
      $('#btn_main, #btn_low').removeClass('active');
    });

    $('#btn_main').on('click', function(e){
        e.preventDefault();
         e.stopPropagation();
      $('#maindeck').fadeIn();
      $('#sundeck, #lowerdeck').fadeOut();

      $('#btn_main').addClass('active');
      $('#btn_sun, #btn_low').removeClass('active');

    });

    $('#btn_low').on('click', function(e){
        e.preventDefault();
         e.stopPropagation();
      $('#lowerdeck').fadeIn();
      $('#sundeck, #maindeck').fadeOut();

      $('#btn_low').addClass('active');
       e.stopPropagation();
      $('#btn_sun, #btn_main').removeClass('active');

    });
}
