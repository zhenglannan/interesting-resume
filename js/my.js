    var strength1 = 50;
    var strength2 = 200;
    var strength3 = 500;

    //获取窗口宽度跟高度
    var ScreenWidth = $(window).width();
    var ScreenHeight = $(window).height();

    //获取窗口长宽比
    var Screen = ScreenWidth / ScreenHeight;

    //水平轴
    var currentScroll;

    //当滚动条滚动时
    $(window).scroll(function () {
    	//获取水平轴位置
    	currentScroll = $(this).scrollLeft();

    	//横向视差滚动 
    	//当前水平轴位置 - (当前窗口宽度 / 2) = 背景滚动值
    	var pageX = currentScroll - ($(window).width() / 2);

    	//1 * 背景滚动值 * 1(1由前向后,-1由后向前) = 滚动方向	
    	var newvalueX = 1 * pageX * 1;

    	//设置该卷标的CSS background-position 背景位置值 来移动背景产生视差滚动的效果
    	$('.bg').css("background-position", (strength1 / $(window).width() * newvalueX * -1) + "px " + "0px");
    	// $('#bgmountain').css("background-repeat", "no-repeat");
    	$('#bgmountain').css("background-position", (strength1 / $(window).width() * newvalueX * -1) + "px " + "0px");
    	$('#Grass1').css("background-position", (strength2 / $(window).width() * newvalueX * -1) + "px " + "0px");
    	$('#Grass2').css("background-position", (strength2 / $(window).width() * newvalueX * -1) + "px " + "0px");
    	$('#Floor2').css("background-position", (strength3 / $(window).width() * newvalueX * -1) + "px " + "0px");

    	//当长宽比是宽屏幕1.7比时
    	if (Screen > 1.7) {
    		//调整背景宽度
    		// $('#bg').css("width", "506%");
    		$('#Floor2').css("width", "506%");
    		$('#Grass1').css("width", "502%");
    		$('#Grass2').css("width", "502%");
    	}
    });


    //当前窗口宽度 / 7(排版的当前窗口宽1280px / 当时固定的触发像素位置182px = 7)= 第一个触发点
    var ActionPoint1 = ScreenWidth / 7;

    //当前窗口宽度 / 1.25 = 第二个触发点
    var ActionPoint2 = ScreenWidth / 1.25;

    //当前窗口宽度 / 0.315 = 第三个触发点
    var ActionPoint3 = ScreenWidth / 0.315;

    //当前窗口宽度 / 0.25 = 第四个触发点
    var ActionPoint4 = ScreenWidth / 0.25;

    //当前窗口宽度 / 0.19 = 第五个触发点
    var ActionPoint5 = ScreenWidth / 0.19;

    //当前窗口高度 / 2.50 = 跳跃起跳最高点高度
    var JumpUp = ScreenHeight / 2.50;

    //当前窗口高度 / 1.25 = 跳跃降落最低点高度
    var JumpDown = 0;

    //旧水平滚动条位置
    var previousScroll = 0;

    //时间计时
    var timer;

    //猪跳跃状态
    var CatJump = 0;

    //当滚动条滚动时
    $(window).scroll(function () {

    	//获取窗口宽度跟高度
    	// ScreenWidth = $(window).width();
    	// ScreenHeight = $(window).height();

    	//当前窗口宽度 / 7(排版的当前窗口宽1280px / 当时固定的触发像素位置182px = 7)= 第一个触发点
    	// ActionPoint1 = ScreenWidth / 7;

    	//当前窗口宽度 / 1.25 = 第二个触发点
    	// ActionPoint2 = ScreenWidth / 1.25;

    	//当前窗口宽度 / 0.315 = 第三个触发点
    	// ActionPoint3 = ScreenWidth / 0.315;

    	//当前窗口宽度 / 0.25 = 第四个触发点
    	// ActionPoint4 = ScreenWidth / 0.25;

    	//当前窗口宽度 / 0.19 = 第五个触发点
    	// ActionPoint5 = ScreenWidth / 0.19;

    	//当前窗口高度 / 1.25 = 跳跃起跳最高点高度
    	// JumpUp = ScreenHeight / 3.31;

    	//当前窗口高度 / 1.25 = 跳跃降落最低点高度
    	// JumpDown = 0;	

    	//获取水平轴位置
    	// currentScroll = $(this).scrollLeft();

    	//猪播放走路动画
    	$("#cat").css('webkitAnimationName', 'catWalk');

    	//判断水平轴向右滚动
    	if (currentScroll > previousScroll) {
    		//人物向右走
    		$("#Player").css('webkitAnimationName', 'RWalk');

    		//只要每过完250毫秒就执行funtion idel
    		clearTimeout(timer);
    		timer = setTimeout(idel, 250);
    	}

    	//判断水平轴向左滚动
    	else if (currentScroll < previousScroll) {
    		//人物向右走
    		$("#Player").css('webkitAnimationName', 'LWalk');

    		//只要每过完250毫秒就执行funtion idel
    		clearTimeout(timer);
    		timer = setTimeout(idel, 250);
    	}

    	//当水平轴滚动到第一个触发点
    	if (currentScroll > ActionPoint1) {
    		//判断猫是否跳跃过第一次
    		if (CatJump == 0) {
    			//队列动画实现跳跃一次
    			$("#cat").animate({
    				bottom: "250px"
    			});
    			$("#cat").animate({
    				bottom: "0px"
    			});
    			CatJump = 1;
    		}
    	}

    	//当水平轴还没滚动到第一个触发点
    	else if (currentScroll < ActionPoint1) {
    		//把猫的跳跃状态恢复为0
    		CatJump = 0;
    	}

    	//当水平轴滚动到第二个触发点
    	if (currentScroll >= ActionPoint2) {
    		//同时飞出蝴蝶
    		$("#Bat1").animate({
    			top: "40%",
    			left: "140%"
    		}, 3500);
    		$("#Bat2").animate({
    			top: "40%",
    			left: "155%"
    		}, 3500);
    		$("#Bat3").animate({
    			top: "40%",
    			left: "170%"
    		}, 4000);
    		$("#Bat4").animate({
    			top: "40%",
    			left: "185%"
    		}, 5000);
    		$("#Bat5").animate({
    			top: "57%",
    			left: "140%"
    		}, 3500);
    		$("#Bat6").animate({
    			top: "57%",
    			left: "155%"
    		}, 4000);
    		$("#Bat7").animate({
			
				top: "57%",
    			left: "170%"
    		}, 5000);
    		$("#Bat8").animate({
    			top: "75%",
    			left: "140%"
    		}, 3500);
    		$("#Bat9").animate({
    			top: "75%",
    			left: "155%"
    		}, 4000);
    		$("#Bat10").animate({
    			top: "75%",
    			left: "170%"
    		}, 5000);
    	}

    	//当水平轴滚动到第三个触发点
    	if (currentScroll > ActionPoint3) {
    		//判断猫是否跳跃过第二次
    		if (CatJump == 1) {
    			//队列动画实现跳跃一次
    			$("#cat").animate({
    				bottom: JumpUp
    			});
    			$("#cat").animate({
    				bottom: JumpDown
    			});
    			CatJump = 2;
    		}
    	}

    	//当水平轴还没滚动到第三个触发点，而且水平轴已经滚动过第一个触发点
    	else if (currentScroll < ActionPoint3 && currentScroll > ActionPoint1) {
    		//把猫的跳跃状态恢复为1
    		CatJump = 1;
    	}

    	//当水平轴已经滚动过第四个触发点，而且水平轴还没滚动超过第五个触发点
    	if (currentScroll > ActionPoint4 && currentScroll < ActionPoint5) {
    		$("#Speak").animate({
    			height: "150px"
    		}, 2000);
    	}

    	//递回现在水平轴滚动位置 给 旧水平轴滚动位置
    	previousScroll = currentScroll;
    });

    //当没有滚动的时候 
    var idel = function () {
    	//玩家动画取消播放
    	$("#Player").css('webkitAnimationName', '');

    	//猪动画取消播放
    	$("#cat").css('webkitAnimationName', '');
    };