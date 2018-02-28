// JavaScript Document

//JQuery
$(document).ready(function(){
	var $root = $('html, body');
	
	$(".navbullet,.socialmediaicon,#email_icon").hover(function(){
		$(this).attr("src", "img/icons/"+$(this).attr("data-icon")+"Blue.png");
	}, function(){
		$(this).attr("src", "img/icons/"+$(this).attr("data-icon")+".png");
	});
	
	$(".navbullet").click(function(){
		var $target = $($(this).parent().attr('href'))
		$root.animate({scrollTop: $target.offset().top - ($(window).height()-$target.height())/2}, 500);
	});
	
	$(window).scroll(function() {
		var winHeight = $(window).height();
		$('.article').css({opacity: function() {
			var elHeight = $(this).height();
			var elTop = $(this).offset().top;
			var scrollTop = $(window).scrollTop();
			var offTop = elTop-scrollTop;
			var dist = 150;
			if (offTop<-dist || offTop>winHeight-elHeight+dist) return 0;
			else if (offTop>=0 && offTop<=winHeight-elHeight) return 1;
			else if (offTop<0) return (offTop + dist) / dist;
			else return 1 - (offTop - winHeight + elHeight) / dist;
			}
		});
	});
});
	
//left and right side panels
	
	//slide_info
		function open_slide_info() {
			var slide_info = document.getElementById("slide_info");
			var slide_ico = document.getElementById("slide_ico");
			var menu = document.getElementById("menu");
			var article = document.getElementsByClassName("article");
			//width
			slide_info.style.width = "26%";
			slide_ico.style.width = "0%";
			//display
			slide_info.style.display = "block";
			slide_ico.style.display = "none";
			//menu
			menu.style.left = "28%";
			menu.style.right = "2%";
			menu.style.width = "70%";
			//icons
			document.getElementById("info_icon_closed").style.width = "0px";
			document.getElementById("info_icon_opened").style.width = "40px";
			document.getElementById("ico_icon_closed").style.width = "40px";
			document.getElementById("ico_icon_opened").style.width = "0px";
			//main
			for (var i=0; i<article.length;i++) {
				article[i].style.left = "32%";
				article[i].style.right = "6%";
				article[i].style.width = "62%";
			}
		}
		function close_slide_info() {
			var slide_info = document.getElementById("slide_info");
			var slide_ico = document.getElementById("slide_ico");
			var menu = document.getElementById("menu");
			var article = document.getElementsByClassName("article");
			//width
			slide_info.style.width = "0%";
			//display
			slide_info.style.display = "none";
			//menu
			menu.style.left = "2%";
			menu.style.width = "96%";
			//icons
			document.getElementById("info_icon_closed").style.width = "40px";
			document.getElementById("info_icon_opened").style.width = "0px";
			//main
			for (var i=0; i<article.length;i++) {
				article[i].style.left = "15%";
				article[i].style.right = "15%";
				article[i].style.width = "70%";
			}
		}
	//slide_ico
		function open_slide_ico() {
			var slide_info = document.getElementById("slide_info");
			var slide_ico = document.getElementById("slide_ico");
			var menu = document.getElementById("menu");
			var article = document.getElementsByClassName("article");
			//width
			slide_ico.style.width = "26%";
			slide_info.style.width = "0%";
			//display
			slide_ico.style.display = "block";
			slide_info.style.display = "none";
			//menu
			menu.style.right = "28%";
			menu.style.left = "2%";
			menu.style.width = "70%";
			//icons
			document.getElementById("ico_icon_closed").style.width = "0px";
			document.getElementById("ico_icon_opened").style.width = "40px";
			document.getElementById("info_icon_closed").style.width = "40px";
			document.getElementById("info_icon_opened").style.width = "0px";
			//main
			for (var i=0; i<article.length;i++) {
				article[i].style.right = "32%";
				article[i].style.left = "6%";
				article[i].style.width = "62%";
			}
		}
		function close_slide_ico() {
			var slide_info = document.getElementById("slide_info");
			var slide_ico = document.getElementById("slide_ico");
			var menu = document.getElementById("menu");
			var article = document.getElementsByClassName("article");
			//width
			slide_ico.style.width = "0%";
			//display
			slide_ico.style.display = "none";
			//menu
			menu.style.right = "2%";
			menu.style.width = "96%";
			//icons
			document.getElementById("ico_icon_closed").style.width = "40px";
			document.getElementById("ico_icon_opened").style.width = "0px";
			//main
			for (var i=0; i<article.length;i++) {
				article[i].style.left = "15%";
				article[i].style.right = "15%";
				article[i].style.width = "70%";
			}
		}
		
//content tabs