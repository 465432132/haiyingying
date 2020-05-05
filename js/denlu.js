// <登陆>
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

	// <01,02,03,04>
	$(function() {
		$('.ul>ul>li').mouseenter(function() {
			$('.ul>ul>li').removeClass("yyy")
			$(this).addClass("yyy")
		});
	});

	// <切换效果1>
	$(function() {
		var list = $('.ii');
		$.each(list, function(index, ele) {
			$(this).click(function() {
				var itm = $(this).index();
				$('.img').hide();
				$('.img').eq(itm).show('1000');
			})
		});

	});

	// <切换效果2>
	$(function() {
		var bon = $('.bian');
		console.log(bon)
		$.each(bon, function() {
			$(this).click(function() {
				var itt = $(this).index();
				console.log(itt)
				$('.imgg').hide();
				$('.imgg').eq(itt).fadeIn("slow");
			})
		});
	});


	// <//切换3>
	var i = 0;
	$(function() {
		var t = $('.gg1');
		console.log(t)
		$.each(t, function() {
			$(this).click(function() {
				i = $(this).index();
				console.log(i)
				$('.imggg1').hide();
				$('.imggg1').eq(i).fadeIn("slow");
			})
		});
	});

	// <首发左右切换>
	$(function() {
		$(".button1").click(function() {
			i--;
			console.log(i)
			if (i < 0) {
				i = 3;
			}
			$('.gg1').removeClass('li1');
			$('.gg1').eq(i).addClass('li1');
			$('.imggg1').hide();
			$('.imggg1').eq(i).fadeIn("slow");
		})
	})

	$(function() {
		$(".button2").click(function() {
			i++;
			// (上去移除样式)
			console.log(i)
			if (i > 3) {
				i = 0;
			}
			$(".gg1").removeClass("li1");
			$(".gg1").eq(i).addClass("li1")
			$('.imggg1').hide();
			$('.imggg1').eq(i).fadeIn("slow");
		})
	})

	// <框框 >
	$(function() {
		$('.mvyou>ul>li>i').mouseenter(function() {
			$('.mvyou>ul>li>i').removeClass("kuang")
			$(this).addClass("kuang")
		});
	});

	// <首发1>
	window.onload = function() {
			var icon = document.getElementsByClassName('i')[0];
			var chang = document.getElementsByClassName('chang3')[0];
			var bofang = document.getElementsByClassName('bofang')[0];
			var img = document.getElementsByClassName('chang1')[0];
			var audio = document.getElementsByClassName("audio1")[0];
			icon.onclick = function() {
				this.style.display = 'none';
				bofang.style.display = 'block';
				img.style.left = '240px';
				img.classList.add('animtaion');
				audio.play();
			}
			bofang.onclick = function() {
				this.style.display = 'none';
				icon.style.display = 'block';
				img.style.left = '200px';
				img.classList.remove('animtaion');
				audio.pause();
			}
			console.log(bofang);

			// <首发2>
			var iconn = document.getElementsByClassName('i1')[0];
			var changg = document.getElementsByClassName('chang33')[0];
			var bofangg = document.getElementsByClassName('bofang1')[0];
			var imgg = document.getElementsByClassName('chang11')[0];
			var audioi = document.getElementsByClassName("audio11")[0];

			iconn.onclick = function() {
				this.style.display = 'none';
				bofangg.style.display = 'block';
				imgg.style.left = '230px';
				imgg.classList.add('animtaion');
				audioi.play();
			}
			bofangg.onclick = function() {
				this.style.display = 'none';
				iconn.style.display = 'block';
				imgg.style.left = '200px';
				imgg.classList.remove('animtaion');
				audioi.pause();
			}

			// <首发右1>
			var dianji1 = document.getElementsByClassName("dianji1")[0];
			var dianji2 = document.getElementsByClassName("dianji2")[0];
			var fang = document.getElementsByClassName("fang")[0];

			dianji1.onclick = function() {
				this.style.display = "none"
				dianji2.style.display = 'block';
				fang.play();

			}

			dianji2.onclick = function() {
				this.style.display = "none"
				dianji1.style.display = 'block';
				fang.pause();

			}

			// <首发右2>
			var dianji3 = document.getElementsByClassName("dianji3")[0];
			var dianji4 = document.getElementsByClassName("dianji4")[0];
			var fang2 = document.getElementsByClassName("fang2")[0];

			dianji3.onclick = function() {
				this.style.display = "none"
				dianji4.style.display = "block"
				fang2.play();
			}

			dianji4.onclick = function() {
				this.style.display = "none"
				dianji3.style.display = "block"
				fang2.pause();
			}


			// <排行榜>
			var fang3 = document.getElementsByClassName("fang3")[0];
			var fang4 = document.getElementsByClassName("fang4")[0];
			var chizhi = document.getElementsByClassName("chizhi")[0];
			var to = document.getElementsByClassName("to")[0];

			fang3.onclick = function() {
				this.style.display = "none"
				fang4.style.display = "block"
				to.style.display = "none"
				chizhi.play();
			}

			fang4.onclick = function() {
				this.style.display = "none"
				fang3.style.display = "block"
				to.style.display = "block"
				chizhi.pause();
			}

			// <排行榜2>
			var fang5 = document.getElementsByClassName("fang5")[0];
			var fang6 = document.getElementsByClassName("fang6")[0];
			var to1 = document.getElementsByClassName("to1")[0];
			var chizhi1 = document.getElementsByClassName("chizhi1")[0];

			fang5.onclick = function() {
				this.style.display = "none"
				fang6.style.display = "block"
				to1.style.display = "none"
				chizhi1.play();
			}

			fang6.onclick = function() {
				this.style.display = "none";
				fang5.style.display = "block"
				to1.style.display = "block"
				chizhi1.pause();
			}

			// <排行榜3>
			var fang7 = document.getElementsByClassName("fang7")[0];
			var fang8 = document.getElementsByClassName("fang8")[0];
			var to2 = document.getElementsByClassName("to2")[0];
			var chizhi2 = document.getElementsByClassName("chizhi2")[0];

			fang7.onclick = function() {
				this.style.display = "none";
				fang8.style.display = "block"
				to2.style.display = "none"
				chizhi2.play();
			}

			fang8.onclick = function() {
				this.style.display = "none";
				fang7.style.display = "block"
				to2.style.display = "block"
				chizhi2.pause();
			}

			// <排行榜4>
			var fang9 = document.getElementsByClassName("fang9")[0];
			var fang10 = document.getElementsByClassName("fang10")[0];
			var to3 = document.getElementsByClassName("to3")[0];
			var chizhi3 = document.getElementsByClassName("chizhi3")[0];

			fang9.onclick = function() {
				this.style.display = "none";
				fang10.style.display = "block"
				to3.style.display = "none"
				chizhi3.play();
			}

			fang10.onclick = function() {
				this.style.display = "none";
				fang9.style.display = "block"
				to3.style.display = "block"
				chizhi3.pause();
			}


	// <返回顶部>
			var fanhui = document.getElementsByClassName("fanhui")[0];

			window.onscroll = function() {
				var y = window.scrollY;
				console.log(y)

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


			// <首发01,2,3,4>
			$(function() {
				$('#shoufa>.shouul>.gg1').click(function() {
					$('#shoufa>.shouul>.gg1').removeClass("li1");
					$(this).addClass("li1");

				});
			});
