//获取图片
var imgs = [
    '../子页1/img/banner1.png',
    '../子页1/img/banner2.png',
    '../子页1/img/banner3.png',
	'../子页1/img/banner4.png'
]
$(function(){
        //当前索引为0
        var tIndex = 0;


    var imga = function(){
        //判断，当索引超过3时则返回到0
        if(tIndex == 4){
            tIndex = 0;
        }
        //获取图片的地址
        var tSrc = imgs[tIndex];
        //设置图片地址
        $("#mm").attr("src",tSrc);

        //清除样式
        $('#shuzi>li').removeClass('active2');
        //获取索引控制样式
        $('#shuzi>li').eq(tIndex).addClass('active2');
        // 清除样式
        $('#shuxian>div').removeClass('a');
        // 获取索引控制样式
        $('#shuxian>div').eq(tIndex).addClass('a');

        //所以自增
        tIndex = tIndex+1;
    }
    // 定时器 让图片轮播
    var t = setInterval(imga,2500);
    // 鼠标移入时清除定时器
    $('#mm').mouseenter(function(){
        // 清除定时器
        clearInterval(t);
        
       var inde =  $(this).index();
        
    })
    
    $('#mm').mouseleave(function(){
        // tIndex = $(this).index();
        t = setInterval(imga,2500);
    });

    
    $('#shuzi>li').mouseenter(function(){
        // 清除定时器
        clearInterval(t);

        //清除样式
        $('#shuzi>li').removeClass('active2');
        // 当鼠标移入其中一个li时给那个li添加样式
        $(this).addClass('active2');

        // 声明变量 获得索引位置
        var index = $(this).index();
        //控制div
        $('#shuxian>div').removeClass('a');
        $("#shuxian>div").eq(index).addClass('a');

        //在创建一个变量，用于提取于图片对应的索引
        var imgIndex = imgs[index];

        //设置图片地址
        $('#mm').attr('src',imgIndex);
    })
    // 鼠标移出时执行
    $('#shuzi>li').mouseleave(function(){
        tIndex = $(this).index();
        t = setInterval(imga,2500);
    })



    $('#shuxian>div').mouseenter(function(){
        // 清除定时器
        clearInterval(t);
        //清除样式
        $('#shuxian>div').removeClass('a');
         // 当鼠标移入其中一个li时给那个li添加样式
        $(this).addClass('a');

        //  声明变量 获得索引位置
        var index = $(this).index();

        //控制li
        $('#shuzi>li').removeClass('active2');
        $("#shuzi>li").eq(index).addClass('active2');
        //在创建一个变量，用于提取于图片对应的索引
        var imgIndex = imgs[index];
        //设置图片地址
        $('#mm').attr('src',imgIndex);
    })
    // 鼠标移出时执行
    $('#shuxian>div').mouseleave(function(){
        tIndex = $(this).index();
        t = setInterval(imga,2500);
    })


})
