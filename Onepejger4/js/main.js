/**
 * Created by filip on 6/29/2016.
 */
/**
 * Created by filip on 6/17/2016.
 */

$('.media ').waypoint(function () {
    $('.media').addClass('animated fadeInDown')
},{
    offset:'50%'
});

jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});


$('.first').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}, {
    offset: '50px;'
});
    