$(function(){
	function isIE() {
		if (!!window.ActiveXObject || "ActiveXObject" in window){
			var link = document.createElement('link');
			link.rel = "stylesheet";
			link.href="./css/ie-animation.css";
			document.getElementsByTagName('head')[0].appendChild(link);
		}
	}
	isIE();

	var h=1;
	$(".banner_2 .fadeInPic .fadeInPic_1").fadeIn(500).delay(1500).fadeOut(500);
	var timer_1=setInterval(function(){
		++h;
		if(h<5){
			$(".banner_2 .fadeInPic .fadeInPic_"+(h)).fadeIn(500).delay(1500).fadeOut(500);		
		}else if(h==5){
			$(".banner_2 .fadeInPic .fadeInPic_"+(h)).fadeIn(500).delay(1500).fadeOut(500);
			h=0;
		}
	},2000);


	var i=1;
	$(".banner_3 .fadeInPic .fadeInPic_1").fadeIn(500).delay(1500).fadeOut(500);
	var timer_1=setInterval(function(){
		++i;
		if(i<3){
			$(".banner_3 .fadeInPic .fadeInPic_"+(i)).fadeIn(500).delay(1500).fadeOut(500);		
		}else if(i==3){
			$(".banner_3 .fadeInPic .fadeInPic_"+(i)).fadeIn(500).delay(1500).fadeOut(500);
			i=0;
		}
	},2000);



	var j=1;
	$(".banner_5 .fadeInPic .fadeInPic_1").fadeIn(500).delay(1500).fadeOut(500);
	var timer_2=setInterval(function(){
		++j;
		if(j<3){
			$(".banner_5 .fadeInPic .fadeInPic_"+(j)).fadeIn(500).delay(1500).fadeOut(500);		
		}else if(j==3){
			$(".banner_5 .fadeInPic .fadeInPic_"+(j)).fadeIn(500).delay(1500).fadeOut(500);
			j=0;
		}
	},2000);
	var k=1;
	$(".banner_6 .fadeInPic .fadeInPic_1").fadeIn(500).delay(1500).fadeOut(500);
	var timer_3=setInterval(function(){
		++k;
		if(k<4){
			$(".banner_6 .fadeInPic .fadeInPic_"+(k)).fadeIn(500).delay(1500).fadeOut(500);		
		}else if(k==4){
			$(".banner_6 .fadeInPic .fadeInPic_"+(k)).fadeIn(500).delay(1500).fadeOut(500);
			k=0;
		}
	},2000);

	
	var l=1;
	$(".banner_7 .fadeInPic .fadeInPic_1").fadeIn(500).delay(1500).fadeOut(500);
	var timer_4=setInterval(function(){
		++l;
		if(l<3){
			$(".banner_7 .fadeInPic .fadeInPic_"+(l)).fadeIn(500).delay(1500).fadeOut(500);		
		}else if(l==3){
			$(".banner_7 .fadeInPic .fadeInPic_"+(l)).fadeIn(500).delay(1500).fadeOut(500);
			l=0;
		}
	},2000);




	
	$(".banner_1 .font").addClass("font-move");
	$(".banner_1 .back").addClass("back-move");
	$(window).scroll(function(){
		//第一个界面的动画
		if($(document).scrollTop()>4/5*($(".banner_2").offset().top)){
			$(".banner_1 .font").removeClass("font-move");
			$(".banner_1 .back").removeClass("back-move");
		}else{
			$(".banner_1 .font").addClass("font-move");
			$(".banner_1 .back").addClass("back-move");
		}
		//第二个界面的动画
		if($(document).scrollTop()<1/6*($(".banner_2").offset().top)||$(document).scrollTop()>4/5*($(".banner_3").offset().top)){
			$(".banner_2 .title").removeClass("banner_2_title_move");
			$(".banner_2 .fu-title_1").removeClass("banner_2_futitle_1_move");
			$(".banner_2 .fu-title_2").removeClass("banner_2_futitle_2_move");
		}else{
			$(".banner_2 .title").addClass("banner_2_title_move");
			$(".banner_2 .fu-title_1").addClass("banner_2_futitle_1_move");
			$(".banner_2 .fu-title_2").addClass("banner_2_futitle_2_move");
		}
		


		//第三个界面的动画
		if($(document).scrollTop()<3/5*($(".banner_3").offset().top)||$(document).scrollTop()>3/5*($(".banner_4").offset().top)){
			$(".banner_3 .title").removeClass("banner_3_title_move");
			$(".banner_3 .fu-title_1").removeClass("banner_3_futitle_1_move");
			$(".banner_3 .fu-title_2").removeClass("banner_3_futitle_2_move");
		}else{
			$(".banner_3 .title").addClass("banner_3_title_move");
			$(".banner_3 .fu-title_1").addClass("banner_3_futitle_1_move");
			$(".banner_3 .fu-title_2").addClass("banner_3_futitle_2_move");
		}


		//第四个界面的动画
		if($(document).scrollTop()<4/5*($(".banner_4").offset().top)||$(document).scrollTop()>($(".banner_5").offset().top)){
			$(".banner_4 .title").removeClass("banner_4_title_move");
			$(".banner_4 .fu-title").removeClass("banner_4_futitle_move");
			$(".banner_4 .title_1").removeClass("banner_4_title_1_move");
			$(".banner_4 .title_2").removeClass("banner_4_title_2_move");
		}else{
			$(".banner_4 .title").addClass("banner_4_title_move");
			$(".banner_4 .fu-title").addClass("banner_4_futitle_move");
			$(".banner_4 .title_1").addClass("banner_4_title_1_move");
			$(".banner_4 .title_2").addClass("banner_4_title_2_move");
		}

		//第五个界面动画
		if($(document).scrollTop()<4/5*($(".banner_5").offset().top)||$(document).scrollTop()>($(".banner_6").offset().top)){
			$(".banner_5 .bg").removeClass("show");
			$(".banner_5 .title").removeClass("banner_5_title_move");
			$(".banner_5 .title_1").removeClass("banner_5_title_1_move");
			$(".banner_5 .title_2").removeClass("banner_5_title_2_move");
		}else{
			$(".banner_5 .bg").addClass("show");
			$(".banner_5 .title").addClass("banner_5_title_move");
			$(".banner_5 .title_1").addClass("banner_5_title_1_move");
			$(".banner_5 .title_2").addClass("banner_5_title_2_move");
		}


		//第六个界面的动画
		if($(document).scrollTop()<9/10*($(".banner_6").offset().top)||$(document).scrollTop()>($(".banner_7").offset().top)){
			$(".banner_6 .opacity-modal").removeClass("opacity-modal-move");
			$(".banner_6 .title").removeClass("banner_6_title_move");
			$(".banner_6 .title_1").removeClass("banner_6_title_1_move");
			$(".banner_6 .title_2").removeClass("banner_6_title_2_move");
		}else{
			$(".banner_6 .opacity-modal").addClass("opacity-modal-move");
			$(".banner_6 .title").addClass("banner_6_title_move");
			$(".banner_6 .title_1").addClass("banner_6_title_1_move");
			$(".banner_6 .title_2").addClass("banner_5_title_2_move");
		}


		//第七个界面的动画
		if($(document).scrollTop()<10/11*($(".banner_7").offset().top)||$(document).scrollTop()>($(".banner_8").offset().top)){
			$(".teach1").removeClass("teach1move");
			$(".teach2").removeClass("teach2move");
			$(".teach3").removeClass("teach3move");
			$(".teach4").removeClass("teach4move");
			$(".teach5").removeClass("teach5move");
			$(".teach6").removeClass("teach6move");
			$(".banner_7 .title").removeClass("banner_7_title_move");
			$(".banner_7 .title_1").removeClass("banner_7_title_1_move");
			$(".banner_7 .title_2").removeClass("banner_7_title_2_move");
		}else{
			$(".teach1").addClass("teach1move");
			$(".teach2").addClass("teach2move");
			$(".teach3").addClass("teach3move");
			$(".teach4").addClass("teach4move");
			$(".teach5").addClass("teach5move");
			$(".teach6").addClass("teach6move");
			$(".banner_7 .title").addClass("banner_7_title_move");
			$(".banner_7 .title_1").addClass("banner_7_title_1_move");
			$(".banner_7 .title_2").addClass("banner_7_title_2_move");
		}



		//第十六个界面的动画
		if($("#parameter")[0]["style"].display=="block"){
			if($(document).scrollTop()<8/13*($(".banner_16").offset().top)||$(document).scrollTop()>($("#parameter>.main_title").offset().top)){
				$(".leftpad").removeClass("leftpadmove");
				$(".middlepad").removeClass("middlepadmove");
				$(".rightpad").removeClass("rightpadmove");
			}else{
				$(".leftpad").addClass("leftpadmove");
				$(".middlepad").addClass("middlepadmove");
				$(".rightpad").addClass("rightpadmove");
			}
		}
	});


	//点击选择概览以及规格参数
	$("#showindex,#showindexs").on('click',function(e){
		e.stopPropagation();
		$("#showparameter,#showparamete").removeClass("rb_btn_selected");
		$("#showindex,#showindexs").addClass("rb_btn_selected");
		$("#index").fadeIn(function(){
			$(document).scrollTop(0);
		});
		$("#parameter").fadeOut();
	});
	$("#showparameter,#showparamete,#showparameters").on('click',function(e){
		e.stopPropagation();
		$("#showparameter,#showparamete").addClass("rb_btn_selected");
		$("#showindex,#showindexs").removeClass("rb_btn_selected");
		$("#index").fadeOut();
		$("#parameter").fadeIn(function(){
			$(document).scrollTop(0);
		});
	});
	//移动端口点击下拉菜单
	$("#sileDown_btn").on("click",function(e){
		e.stopPropagation();
		if($(".rb_btn_slideDown").hasClass("rb_btn_slideDown_move")){
			$(".rb_btn_slideDown").removeClass("rb_btn_slideDown_move");
			$(".rb_good_name .rb_good_icon").removeClass("rb_good_icon_move");
		}else{
			$(".rb_btn_slideDown").addClass("rb_btn_slideDown_move");
			$(".rb_good_name .rb_good_icon").addClass("rb_good_icon_move");
		}
		
	})
	//关闭下拉菜单
	$(document).on("click",function(){
		$(".rb_btn_slideDown").removeClass("rb_btn_slideDown_move");
		$(".rb_good_name .rb_good_icon").removeClass("rb_good_icon_move");
	})

	//下拉菜单置顶和回到顶部按钮
	$(window).on("scroll",function(){
		if($(window).scrollTop()>40){
			$(".rb_btn").css({"position":"fixed"});
		}else{
			$(".rb_btn").css({"position":"absolute"});
		}
		//回到顶部按钮的消失与出现
		var scrollTop = $(document).scrollTop(),
			bodyHeight = $(window).height()/2;
		if (scrollTop > bodyHeight) {
			$(".rb_to_top").css('display','block');
		}else{
			$(".rb_to_top").css('display','none');
		}
	})

	//回到顶部按钮操作
	$(".rb_to_top").on("click",function(){
		$('html,body').animate({
			scrollTop:0
		});
	})


	// 视频播放
	$('#open_video_a').on('click', function(){
		if($(window).width() > 630) {
			var area_range = ['630px', '360px'];
		}else {
			var area_range = ['100%', '100%'];
		}
		layer.open({
		  type: 2,
		  title: false,
		  area: area_range,
		  shade: 0.8,
		  closeBtn: 2,
		  shadeClose: false,
		  content: 'http://www.readboy.com/statics/video/视频2.mp4'
		});
	});
})