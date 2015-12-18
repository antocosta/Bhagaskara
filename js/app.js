/**
 * Created by daria on 10.12.15.
 */
//scroll
$(document).ready(function(){

    function scrollPage() {
        var menuItems = $(".menuScroll").children();
        menuItems.on("click", function(event){
            event.preventDefault();
            console.log(this);
            var href = $(this).find("a").attr("href");
            console.log(href);
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 2000);
        });
     }
    scrollPage();

//sticky menu
    function stickyMenu() {
        var menu = $(".menuWidth");
        var menuOffsetFromTop = menu.position().top;

        $(window).on("scroll", function (event) {
            //console.log(window).scrollTop());
            if ($(window).scrollTop() > menuOffsetFromTop) {
                menu.addClass("sticky");
            }
            else {
                menu.removeClass("sticky");
            }
        });
    }
    stickyMenu();

//slider1
    function slider1() {
        var buttonLeft = $("#arrowleftButton");
        var buttonRight = $("#arrowrightButton");
        var allMembers = $(".flex-slider").children();
        var allChildren = $(".flex-slider").children().length;
        var counter = 1;

        buttonRight.on("click", function(event){
            event.preventDefault();                     //żeby strona się nie przeładowywała przez a href
            var biggerElement = $(".bigger");
            allMembers.removeClass("bigger");
            var actualElement = biggerElement.index();

            if (actualElement >= allChildren - 1) {
                counter = 0;
            } else {
                counter ++;
            }
            allMembers.eq(counter).addClass("bigger");
        });
        buttonLeft.on("click", function(event){
            event.preventDefault();                     //żeby strona się nie przeładowywała przez a href
            var biggerElement = $(".bigger");
            allMembers.removeClass("bigger");
            var actualElement = biggerElement.index();

            if (actualElement <= 0) {
                counter = allChildren-1;
            } else {
                counter --;
            }
            allMembers.eq(counter).addClass("bigger");
        });

    }
    slider1();

});

//slider z animacji
//document.addEventListener('DOMContentLoaded', function () {
//
//    var listWithPictures = document.querySelectorAll("flex-slider li");
//    var prevButton = document.getElementById("arrowleftButton");
//    var nextButton = document.getElementById("arrowrightButton");
//    var biggerPicture = 0;
//
//    listWithPictures[biggerPicture].classList.add("smaller");
//
//    prevButton.addEventListener("click", function(event) {
//        listWithPictures[biggerPicture].classList.remove("smaller");
//        biggerPicture--;
//        if(biggerPicture < 0)  {
//            biggerPicture = listWithPictures.length-1;
//        }
//        listWithPictures[biggerPicture].classList.remove("smaller");
//    });
//
//    nextButton.addEventListener("click", function(event) {
//        listWithPictures[biggerPicture].classList.remove("smaller");
//        biggerPicture++;
//        if(biggerPicture >= listWithPictures.length){
//            biggerPicture = 0;
//        }
//        listWithPictures[biggerPicture].classList.remove("smaller");
//    });
//
//
//});



//formulate validation

