/********************* Add language functionality ********************/
var language = 'en';

function getLanguage() {
    (localStorage.getItem('currentLanguage') == null) ? setLanguage('en') : false;
    $.ajax({
        dataType: 'json',
        aync: false,
        url: '/' + localStorage.getItem('currentLanguage') + '.json',
        success: function(data) {
            language = data;
            $('#title_id').text(language.title_id);
            $('#intro_id').text(language.intro_id);
            $('#schedule_id').text(language.schedule_id);
            $('#events_id').text(language.events_id);
            $('#phototag_id').text(language.phototag_id);
            $('#engpics_id').text(language.engpics_id);
            $('#map_id').text(language.map_id);
            $('#hotels_id').text(language.hotels_id);
            $('#invitation_title_id').text(language.invitation_title_id);
            $('#invitation_p_id').text(language.invitation_p_id);
            $('#invitation_countdown_id').text(language.invitation_countdown_id);
            $('#intro_p_id').text(language.intro_p_id);
            $('#phototag_memories_id').text(language.phototag_memories_id);
            $('#phototag_tag_id').text(language.phototag_tag_id);
            $('#phototag_cameras_id').text(language.phototag_cameras_id);
            $('#venue_description_id').text(language.venue_description_id);
            $('#map_map_id').text(language.map_map_id);
            $('#btn_show_content').text(language.btn_show_content);
            $('#book_uber_id').text(language.book_uber_id);
            $('#btn_show_map').text(language.btn_show_map);
            $('#thank_you_id').text(language.thank_you_id);
            $('#see_you_id').text(language.see_you_id);
            $('#rsvp_text_id').text(language.rsvp_text_id);
            $('#rsvp_disabled_id').text(language.rsvp_disabled_id);
            $('#dev_id').text(language.dev_id);
        }
    });
}

function setLanguage(language) {
    localStorage.setItem('currentLanguage', language);
    getLanguage();
}

$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************* Initialize language ********************/

    getLanguage();
    $('#title_id').text(language.title_id);
    $('#intro_id').text(language.intro_id);
    $('#schedule_id').text(language.schedule_id);
    $('#events_id').text(language.events_id);
    $('#phototag_id').text(language.phototag_id);
    $('#engpics_id').text(language.engpics_id);
    $('#map_id').text(language.map_id);
    $('#hotels_id').text(language.hotels_id);
    $('#invitation_title_id').text(language.invitation_title_id);
    $('#invitation_p_id').text(language.invitation_p_id);
    $('#invitation_countdown_id').text(language.invitation_countdown_id);
    $('#intro_p_id').text(language.intro_p_id);
    $('#phototag_memories_id').text(language.phototag_memories_id);
    $('#phototag_tag_id').text(language.phototag_tag_id);
    $('#phototag_cameras_id').text(language.phototag_cameras_id);
    $('#venue_description_id').text(language.venue_description_id);
    $('#map_map_id').text(language.map_map_id);
    $('#btn_show_content').text(language.btn_show_content);
    $('#book_uber_id').text(language.book_uber_id);
    $('#btn_show_map').text(language.btn_show_map);
    $('#thank_you_id').text(language.thank_you_id);
    $('#see_you_id').text(language.see_you_id);
    $('#rsvp_text_id').text(language.rsvp_text_id);
    $('#rsvp_disabled_id').text(language.rsvp_disabled_id);
    $('#dev_id').text(language.dev_id);

    /********************* Add wedding countdown ********************/
    
    let targetDate = new Date(2024, 3-1, 15, 12);
    let onStart = () => {
        document.querySelectorAll('.countdown-item').forEach(item => item.classList.add('show'))
    }
    let onTick = ({ years, days, hours, minutes, seconds }) => {
        document.querySelector('.countdown-item.days').innerText = parseInt(years.slice(0, -1))*365+parseInt(days.slice(0, -1))+'d';
        document.querySelector('.countdown-item.hours').innerText = hours;
        document.querySelector('.countdown-item.minutes').innerText = minutes;
        document.querySelector('.countdown-item.seconds').innerText = seconds;
    };
    let options = new LsCountdownOptions({ targetDate, onStart, onTick });
    let countdown = new LsCountdown(options);
    countdown.start();
    window.mycountdown = countdown;

    /********************** Embed youtube video *********************/
    $('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn_show_map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn_show_content').toggleClass('toggle-map-content');
    });
    $('#btn_show_content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn_show_content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    var myCalendar = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Daniela and Stephan's Wedding",

            // Event start date
            start: new Date('Mar 15, 2024 10:00'),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date('Mar 16, 2024 01:00'),

            // Event Address
            address: 'Patio Los Arcos Vallarta, Marina Vallarta, 48450 Puerto Vallarta, Jalisco, Mexico',

            // Event Description
            description: "Daniela and Stephan's Wedding"
        }
    });

    $('#add-to-cal').html(myCalendar);


    /********************** RSVP **********************/
    /*
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Please wait...</strong> Saving your details.'));
   
        if (Sha256.hash($('#invite_code').val()) !== 'b1e3d2624807335612c5acb94bc3460cb90b04f39a3d97a211860edd8e464457') {
            $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
        } else {
            $.post('https://script.google.com/macros/s/AKfycbyopuH8ir2p4WvyQUIRHJ95DrJNRaoqdpLGA0HadbCjsdyjddOkXMXDwN7q6IFUC3FHng/exec', data)
                .done(function (data) {
                    if (data.result === "error") {
                        $('#alert-wrapper').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper').html('');
                        $('#rsvp-modal').modal('show');
                    }
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
                });
        }
    });*/
});

/********************** Extras **********************/

// Google map
/*function initMap() {
    var location = {lat: 20.656498486201187, lng: -105.24944455618083};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });

    window.initMap = initMap;
}*/

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}


