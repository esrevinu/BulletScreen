var socket = io();

$('#popupMenu_font').find('a').click(function(e){
    $('#size').text($(e.target).text()).attr("danmaku-size",$(e.target).attr("danmaku-size"));
});

$('#popupMenu_mode').find('a').click(function(e){
    $('#mode').text($(e.target).text()).attr("danmaku-mode",$(e.target).attr("danmaku-mode"));
});

$('#popupMenu_color').find('a').click(function(e){
    $('#color').text($(e.target).text()).attr("danmaku-color",$(e.target).attr("danmaku-color"));
});
$('#popupMenu_duration').find('a').click(function(e){
    $('#duration').text($(e.target).text()).attr("danmaku-duration",$(e.target).attr("danmaku-duration"));
});

$('#btnSend').click(function(e){
    e.preventDefault();

    var danmaku = {
        "mode": Number($("#mode").attr("danmaku-mode")),
        "text": $('#msg').val(),
        "stime":0,
        "size": Number($("#size").attr("danmaku-size")),
        "color":parseInt($("#color").attr("danmaku-color"),16),
        "dur":Number($("#duration").attr("danmaku-duration"))
    };
    var msg=JSON.stringify(danmaku);
    console.log(msg);
    socket.emit('danmaku send',msg);
    $('#msg').val("");
});