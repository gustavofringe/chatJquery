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
        setTimeout(function(){
            $('.chatlogs').html(content + "<div class='chat friend'><div class='user-picture'><img src='img/Chat.svg' alt='picture'></div><p class='chat-message'>" + response + "</p></div>").show();
            },5000);
        });

});