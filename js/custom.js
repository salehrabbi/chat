$(function () {
    $('.chat .message').slimScroll({
        height: '63vh'
    });
    $('.chat .useritem-wraper').slimScroll({
        height: '80vh'
    });
});

$(".useritem-wraper-parent .arrow").click(function(){
    $(".useritem-wraper-parent").toggleClass("active");
});