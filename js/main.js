/**
 *
 *
 * VARIABLES
 * @type {number}
 */
var index = -1;
var messages = [
    "Hello !",
    "you are stupid?",
    "Are you free to dine tonight ?",
    "I'll pick you up...",
    "My little kitten, you are so sweet !",
    "your hair is very soft",
    "do you want a hug ?",
    "you are very nice gentleman",
    "have you got a girlfriend?",
    "do you want a relationship with me?",
    "I would do whatever you want...little kitten",
    "let's go now?",
];
//==================================================ACTION
/**
 *
 * start talk after hide form
 *
 *
 */
/*$('.chatbox').hide();
$('#start').click(function(){
    $('.name').hide();
    $('.chatbox').show('slow');
});*/
/**
 *
 * action for click & enter to send message
 *
 */
$('#send').click(function () {
    insert();
    $(".chatlogs").animate({
        scrollTop: $(".chatlogs").get(0).scrollHeight
    }, 2000);
});
$("textarea").keyup(function (e) {
    if (e.keyCode == 13) {
        insert();
        $(".chatlogs").animate({
            scrollTop: $(".chatlogs").get(0).scrollHeight
        }, 1000);
    }
});
/**
 *
 * function insert
 * @return dialog
 *
 */
function insert() {
    index++;
    var message = messages[index];
    var msg = $('textarea').val();
    var wait = "<div class='end'><div class='bubble wait'></div><div class='bubble waitInverse'></div><div class='bubble wait'></div></div>";
    var user = "<div class='chat user'><div class='user-picture'><img src='img/Chat.svg' alt='picture'></div><p class='chat-message'>" + $('#name').val() + " dit: " + msg + "</p></div>";
    var friend = "<div class='chat friend'><div class='user-picture'><img src='img/Chat.svg' alt='picture'></div><p class='chat-message'>" + message + "</p></div>";
    $('.chatlogs').append(user);
    $('.chatlogs').append(wait);
    setTimeout(function () {
        $('.chatlogs').append(friend).show().fadeIn(1000);
    }, 3000);
    setTimeout(function () {
        $('.end').remove();
    }, 3000);
    $('textarea').val('');
}

