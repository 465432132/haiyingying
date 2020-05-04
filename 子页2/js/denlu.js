
		$(function(){
			$('.denglu').click(function(){
				// $('.frame').removeClass(".frame")
				$('.frame').css({'display':'block'});
			})
			$(".xx").click(function(){
				$('.frame').css({'display':'none'});
			})
		});
		
		window.onload = function() {
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
						
						
			var sbj7 = document.getElementsByClassName("sbj7")[0];
			var sbj8 = document.getElementsByClassName("sbj8")[0];
			var sbj3 = document.getElementsByClassName("sbj3")[0];
			var dian = document.getElementsByClassName("dian")[0];
			
			console.log(sbj7);
			sbj7.onclick = function(){
			this.style.display = "none";
			sbj8.style.display = "block";
			sbj8.style.opacity = "1";
			sbj3.classList.add('s');  
			dian.play();
			}
			
			sbj8.onclick = function(){
			this.style.display = "none";
			sbj7.style.display = "block";
			sbj8.style.opacity = "0";
			sbj3.classList.remove('s');
			dian.pause();
			}
	}