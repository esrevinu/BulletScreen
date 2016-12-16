window.addEventListener('load', function () {
    // 在窗体载入完毕后再绑定
    var CM = new CommentManager($('#my-comment-stage').get(0));
    CM.init();
    // 先启用弹幕播放（之后可以停止）
    CM.start();

    // 开放 CM 对象到全局这样就可以在 console 终端里操控
    window.CM = CM;

    var socket = io();
    socket.on('danmaku show', function (msg) {
        console.log(msg);
        $('#messages').append($('<li>').text(msg));
        var danmaku = JSON.parse(msg);
        CM.send(danmaku);
    });

    // cmtController();
});

function getCmtDataList() {
    var cmtArr = [];

    // 可以使用jsonp获取服务器的字幕数据
    /*$.ajax({
     type : 'GET',
     url : 'http://192.168.9.67/test.php',
     dataType : 'jsonp',
     data : {sid : 100},
     success : function(data) {
     cmtArr = data.dataList;

     if (cmtArr && cmtArr.length > 0) {
     sendMsg(cmtArr);
     }
     }
     });*/

    // 测试数据
    cmtArr = [
        {"text":"大家期待什么新品啊", "bgColor":"#424448", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"会有什么惊喜吗？", "bgColor":"#424448", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"等待中。。", "bgColor":"#23b28b", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"会有什么新产品呢？", "bgColor":"#424448", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"定时执行", "bgColor":"#23b28b", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"1123333446红咖喱的非农房价", "bgColor":"#ec4262", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"测试接口发评论00", "bgColor":"#ec4262", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"测试接口发评论00", "bgColor":"#3dbbc0", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"啊啊啊啊啊啊啊哦哦哦诶IEIE恩家报表出具", "bgColor":"#ec4262", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"},
        {"text":"的方式的方法反反复复反复反复", "bgColor":"#23b28b", "icon":"http://face.weiphone.net/data/avatar/000/15/31/95_avatar_big.jpg"}
    ];

    sendMsg(cmtArr);
}


function sendMsg(cmtArr) {

    for (var i=0; i<cmtArr.length; i++) {
        var cmtItem = cmtArr[i],
            iconStr = '';

        if (cmtItem.icon && cmtItem.icon.length > 0) {
            iconStr = '<span class="icon"><img src="'+ cmtItem.icon +'"></span>';
        }

        // 字幕的节点内容
        cmtItem.text = iconStr + cmtItem.text;
        cmtItem.mode = 8;
        cmtItem.dur = Math.floor(Math.random()*4000 + 4000);

        CM.send(cmtItem);
    }
}

function cmtController() {
    getCmtDataList();

    setTimeout(function(){
        cmtController();
    }, 5000);
}