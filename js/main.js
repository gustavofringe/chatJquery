var messages = [
    "Hello!",
    "what do you want?",
    "RTFM!!!",
    "You are so nice...",
    "Help me please",
    "Jquery for life",
    "give me five!"
];
var username = prompt('Quel est ton pseudo?');
var insert = function(){
    var response = messages[Math.floor(Math.random() * messages.length)];
    var msg = $('textarea').val();
    var wait = "<div class='end'><div class='bubble wait'></div><div class='bubble waitInverse'></div><div class='bubble wait'></div></div>";
    var user = "<div class='chat user'><div class='user-picture'><img src='img/Chat.svg' alt='picture'></div><p class='chat-message'>" + username + " dit: " + msg + "</p></div>";
    var friend = "<div class='chat friend'><div class='user-picture'><img src='img/Chat.svg' alt='picture'></div><p class='chat-message'>" + response + "</p></div>";
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
$('button').click(function () {
    insert();
});
$("textarea").keyup(function (e) {

    if (e.keyCode == 13) {

        insert();

    }
});