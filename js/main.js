$(document).ready(function () {
    var messages = [
        "youpi!",
        "super!",
        "yahoo!"
    ];

    $('button').click(function () {
        var response = messages[Math.floor(Math.random() * messages.length)];
        console.log(response)
        var msg = $('textarea').val();
        var content = $('.chatlogs').html();

        $('.chatlogs').html(content + "<div class='chat user'><div class='user-picture'><img src='img/Chat.svg' alt='picture'></div><p class='chat-message'>" + msg + "</p></div>");
        $('.chatlogs').html(content + "<div class='chat friend response'><div class='user-picture'><img src='img/Chat.svg' alt='picture'></div><p class='chat-message'>" + response + "</p></div>");
        $('.response').hide(0).delay(5000).show(200)
    });
});