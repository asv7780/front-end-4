"use strict"


$ (function () {
    $ ('.persons').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 2000,
                settings: "slick"
            },
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    });
});


$ (".facts-counter").each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step:function(now) {
           $(this).text(Math.ceil(now));
        }
    });
});

$ (function () {
    $ ("form[name='userForm']").validate({
        rules :{
            user :{
                required: true
            },
            Email :{
                required: true
            },
            sms :{
                required: true
            }
        },
        messages:{
            user: "Please, enter your name",
            Email: "Please, enter your Email",
            sms: "Please, enter your text"

        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

function initMap() {
    var centerLatLng = new google.maps.LatLng(49.423631, 26.986471);
    var mapOptions = {
        center: centerLatLng,
        zoom: 16
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

google.maps.event.addDomListener(window, "load", initMap);