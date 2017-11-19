$(document).ready(function () {

    $("#about_scroll").fadeOut();
    $("#skills_scroll").fadeOut();
    $("#work_scroll").fadeOut();
    $("#contact_scroll").fadeOut();
    $("#resume").click(function () {
        window.location.href = "#"
    });
    $("#skills").click(function () {
        $("#index").fadeOut();
        $("#skills_scroll").fadeIn();
        $('#skills_left').addClass('animated slideInLeft');
        $('#skills_right').addClass('animated slideInRight');
    });
    $("#about").click(function () {
        $("#index").fadeOut();
        $("#about_scroll").fadeIn();
        $('#about_left').addClass('animated slideInLeft');
        $('#about_right').addClass('animated slideInRight');
    });
    $("#work").click(function () {
        $("#index").fadeOut();
        $("#work_scroll").fadeIn();
        $('#work_left').addClass('animated slideInLeft');
        $('#work_right').addClass('animated slideInRight');
    });
    $("#contact").click(function () {
        $("#index").fadeOut();
        $("#contact_scroll").fadeIn();
        $('#contact_left').addClass('animated slideInLeft');
        $('#contact_right').addClass('animated slideInRight');
    });

    $(".back").click(function () {
        $(".pages").fadeOut();
        $("#index").fadeIn();
        $('#index_left').addClass('animated slideInLeft');
        $('#index_right').addClass('animated slideInRight');
    });

});