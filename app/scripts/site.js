Parse.initialize("AKSUebdxKe82i1QR4WZZTXpog6pWMo5FEAo3dPk0", "Hf6uvBRtwY4se7DKWfqckvFkpN4TktNb9PpKdXc9");

//Resize
$( window ).resize(function() {

  $.modal.resize();
  if($(".fullpage-wrapper")[0]){
    $.fn.fullpage.reBuild();
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

        var username = $("#login-username").val();
        var password = $("#login-password").val();

        e.preventDefault();
        login( username, password);
    });

  $(".section .slide a.button").click(function(e){
    e.preventDefault();

    var selection = $(this).attr("href");
    var section = selection.substring(1, 2);
    var slide = selection.substring(2);
    console.log(section,slide)
    $.fn.fullpage.moveTo(section,slide);

  });


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

    $('a#closeMenu').click(function(){
        $.sidr("close");
    });

});
function createLanding(){
    $('#onepage').fullpage({
        menu: '#anchor-menu',
        anchors:['home','yacht', 'outside','bimini','fly', 'stern'],
        resize: false,
        autoScrolling: true,
        scrollOverflow: true,
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
        onLeave: function(index, nextIndex, direction){
            var hmenu = $('div#landing-menu div.center')

                hmenu.addClass('fast-hide');
                if (hmenu.hasClass('show')){
                    hmenu.removeClass('show');
                }



        }

    });
}
function hasFullPage(page){
    $(arrayFullPage).each(function(){

    });
}
function webSlide(){
    $("#onepage").load("/pages/slides/yacht_size_web.html",function(data){
      homeSlides();

      createLanding();

    });
}
function mobileSlide(){
    $("#onepage").load("/pages/slides/yacht_size_mobile.html",function(data){
        homeSlides();

        createLanding();

    });
}


function checkPage(size){
    hidePrivateSection();
    var pathArray = window.location.pathname.split( '/' );
    if (pathArray[2] == "landing.html"){

        if (size == "web"){
            webSlide();
        }else if (size == "mobile"){
           mobileSlide();
        }



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
        var link = $(this).attr("href");
        checkUser(loginUrl,link)
    })

}
function hidePrivateSection(){
    var isLogged = isLoggedIn();
    if(!isLogged){
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
       }


}
