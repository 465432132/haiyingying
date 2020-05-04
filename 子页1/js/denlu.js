$(function() {
	$('.denglu').click(function() {
		// $('.frame').removeClass(".frame")
		$('.frame').css({
			'display': 'block'
		});
	})
	$(".xx").click(function() {
		$('.frame').css({
			'display': 'none'
		});
	})
});


// <ul第一个>
window.onload = function() {
	var dian1 = document.getElementsByClassName("dian1")[0];
	var bian1 = document.getElementsByClassName("bian1")[0];
	var fang1 = document.getElementsByClassName("fang1")[0];
	var fangge1 = document.getElementsByClassName("fangge1")[0];
	var ul1 = document.getElementsByClassName("ul1")[0];

	fang1.onclick = function() {
		this.style.display = "none";
		bian1.style.display = "block";
		dian1.style.display = "none"
		fangge1.play();
		ul1.style.background = "rgb(255,255,255,0.05)";
	}

	bian1.onclick = function() {
		this.style.display = "none";
		dian1.style.display = "block";
		fang1.style.display = "block"
		fangge1.pause();
		ul1.style.background = "";
	}

	// <ul第二个>
	var dian2 = document.getElementsByClassName("dian2")[0];
	var bian2 = document.getElementsByClassName("bian2")[0];
	var fang2 = document.getElementsByClassName("fang2")[0];
	var ul2 = document.getElementsByClassName("ul2")[0];
	var fangge2 = document.getElementsByClassName("fangge2")[0];

	fang2.onclick = function() {
		this.style.display = "none";
		bian2.style.display = "block";
		dian2.style.display = "none";
		ul2.style.background = "rgb(255,255,255,0.05)";
		fangge2.play();
	}

	bian2.onclick = function() {
		this.style.display = "none";
		dian2.style.display = "block";
		fang2.style.display = "block"
		ul2.style.background = ""
		fangge2.pause();
	}

	// <ul第三个>
	var dian3 = document.getElementsByClassName("dian3")[0];
	var bian3 = document.getElementsByClassName("bian3")[0];
	var fang3 = document.getElementsByClassName("fang3")[0];
	var ul3 = document.getElementsByClassName("ul3")[0];
	var fangge3 = document.getElementsByClassName("fangge3")[0];

	fang3.onclick = function() {
		this.style.display = "none";
		bian3.style.display = "block";
		dian3.style.display = "none"
		ul3.style.background = "rgb(255,255,255,0.05)";
		fangge3.play();
	}

	bian3.onclick = function() {
		this.style.display = "none";
		dian3.style.display = "block";
		fang3.style.display = "block"
		ul3.style.background = "";
		fangge3.pause();
	}

	// <ul第四个>
	var dian4 = document.getElementsByClassName("dian4")[0];
	var bian4 = document.getElementsByClassName("bian4")[0];
	var fang4 = document.getElementsByClassName("fang4")[0];
	var ul4 = document.getElementsByClassName("ul4")[0];

	fang4.onclick = function() {
		this.style.display = "none";
		bian4.style.display = "block";
		dian4.style.display = "none"
		ul4.style.background = "rgb(255,255,255,0.05)";
	}

	bian4.onclick = function() {
		this.style.display = "none";
		dian4.style.display = "block";
		fang4.style.display = "block"
		ul4.style.background = "";
	}

	// <ul第五个>
	var dian5 = document.getElementsByClassName("dian5")[0];
	var bian5 = document.getElementsByClassName("bian5")[0];
	var fang5 = document.getElementsByClassName("fang5")[0];
	var ul5 = document.getElementsByClassName("ul5")[0];

	fang5.onclick = function() {
		this.style.display = "none";
		bian5.style.display = "block";
		dian5.style.display = "none"
		ul5.style.background = "rgb(255,255,255,0.05)";
	}

	bian5.onclick = function() {
		this.style.display = "none";
		dian5.style.display = "block";
		fang5.style.display = "block"
		ul5.style.background = "";
	}

	// <ul第六个>
	var dian6 = document.getElementsByClassName("dian6")[0];
	var bian6 = document.getElementsByClassName("bian6")[0];
	var fang6 = document.getElementsByClassName("fang6")[0];
	var ul6 = document.getElementsByClassName("ul6")[0];

	fang6.onclick = function() {
		this.style.display = "none";
		bian6.style.display = "block";
		dian6.style.display = "none"
		ul6.style.background = "rgb(255,255,255,0.05)";
	}

	bian6.onclick = function() {
		this.style.display = "none";
		dian6.style.display = "block";
		fang6.style.display = "block"
		ul6.style.background = "";
	}

	// <ul第七个>
	var dian7 = document.getElementsByClassName("dian7")[0];
	var bian7 = document.getElementsByClassName("bian7")[0];
	var fang7 = document.getElementsByClassName("fang7")[0];
	var ul7 = document.getElementsByClassName("ul7")[0];

	fang7.onclick = function() {
		this.style.display = "none";
		bian7.style.display = "block";
		dian7.style.display = "none"
		ul7.style.background = "rgb(255,255,255,0.05)";
	}

	bian7.onclick = function() {
		this.style.display = "none";
		dian7.style.display = "block";
		fang7.style.display = "block"
		ul7.style.background = "";
	}

	// <ul第八个>
	var dian8 = document.getElementsByClassName("dian8")[0];
	var bian8 = document.getElementsByClassName("bian8")[0];
	var fang8 = document.getElementsByClassName("fang8")[0];
	var ul8 = document.getElementsByClassName("ul8")[0];

	fang8.onclick = function() {
		this.style.display = "none";
		bian8.style.display = "block";
		dian8.style.display = "none"
		ul8.style.background = "rgb(255,255,255,0.05)";
	}

	bian8.onclick = function() {
		this.style.display = "none";
		dian8.style.display = "block";
		fang8.style.display = "block"
		ul8.style.background = "";
	}

	// <ul第九个>
	var dian9 = document.getElementsByClassName("dian9")[0];
	var bian9 = document.getElementsByClassName("bian9")[0];
	var fang9 = document.getElementsByClassName("fang9")[0];
	var ul9 = document.getElementsByClassName("ul9")[0];

	fang9.onclick = function() {
		this.style.display = "none";
		bian9.style.display = "block";
		dian9.style.display = "none"
		ul9.style.background = "rgb(255,255,255,0.05)";
	}

	bian9.onclick = function() {
		this.style.display = "none";
		dian9.style.display = "block";
		fang9.style.display = "block"
		ul9.style.background = "";
	}

	// <ul第十个>
	var dian10 = document.getElementsByClassName("dian10")[0];
	var bian10 = document.getElementsByClassName("bian10")[0];
	var fang10 = document.getElementsByClassName("fang10")[0];
	var ul10 = document.getElementsByClassName("ul10")[0];

	fang10.onclick = function() {
		this.style.display = "none";
		bian10.style.display = "block";
		dian10.style.display = "none"
		ul10.style.background = "rgb(255,255,255,0.05)";
	}

	bian10.onclick = function() {
		this.style.display = "none";
		dian10.style.display = "block";
		fang10.style.display = "block"
		ul10.style.background = "";
	}


	var bi1 = document.getElementsByClassName("bi1")[0];
	var qihuan = document.getElementsByClassName("qihuan")[0];
	var bi2 = document.getElementsByClassName("bi2")[0];
	var bi3 = document.getElementsByClassName("bi3")[0];
	var bi4 = document.getElementsByClassName("bi4")[0];
	
	var arr = ["audio/Daug.mp3","audio/drag.mp3","audio/yiger.mp3"];
	
	
	var arr1 = 0;
	
	bi1.onclick = function () {
	this.style.display = "none"
	bi2.style.display = "block"
	qihuan.scr = arr1[arr];
	qihuan.play();
	console.log(arr)
	
	bi3.style.display = "block";
	bi4.style.display = "block";
	}
	
	bi2.onclick = function () {
	this.style.display = "none"
	bi1.style.display = "block"
	qihuan.pause()
	
	bi3.style.display = "none";
	bi4.style.display = "none";
	}
	
	
	
	bi4.onclick = function(){
	arr1++;
	if(arr1 > 2){
		arr1 = 0;
	}
	qihuan.src = arr[arr1];		
	qihuan.play();
	
	
	console.log(arr1)
}
	
	bi3.onclick = function(){
	arr1--;
	if(arr1 < 0){
		arr1 = 2 ;
	}
	console.log(arr1)
	qihuan.src = arr[arr1];
	qihuan.play();
	
 
	
  }



	// <返回顶部>
			var fanhui = document.getElementsByClassName("fanhui")[0];

			window.onscroll = function() {
				var y = window.scrollY;

				if (y >= 800) {
					fanhui.style.display = "block"
				} else {
					fanhui.style.display = "none"
				}

}
			fanhui.onclick = function(){
				scrll() ;
			}
			var time;
				function scrll() {
					time = setInterval(function() {
						var target = window.scrollY;
						var speend = target - 150;
						
						if(target <= 0){
							clearInterval(time);
						}else{
							window.scrollTo(0,speend)
						}
					}, 30)

				}
}
