<!doctype html>
<html>

<head>
	<meta charset="UTF-8">
	<title>unipol</title>
	<link rel="stylesheet" href="index.css">
	<script src="jquery-3.3.1.min.js"></script>
	<script src="script.js"></script>
	<!--script src="jQuery.js"></script-->
	<link href="/favicon.ico" rel="icon" type="image/x-icon" />
</head>

	
	
<body>

	<!-- main menu, hovers over every page -->
		<nav id="menu">
			<!-- top left side button for short -->
				<a id="info_link">
					<img src="img/icons/info.png" onClick="open_slide_info()" alt="open info" id="info_icon_closed">
					<img src="img/icons/x.png" onClick="close_slide_info()" alt="close info" id="info_icon_opened">
				</a>
			<!-- top right side button for short -->
				<a id="ico_link">
					<img src="img/icons/unix.png" onClick="open_slide_ico()" alt="open ico" id="ico_icon_closed">
					<img src="img/icons/x.png" onClick="close_slide_ico()" alt="close ico" id="ico_icon_opened">
				</a>
			<!-- navigation -->
				<ul id="navigation">

					<li class="navigation">
						unipol
						<a href="#start"><img src="img/icons/compass.png" alt="o" class="navbullet" id="navstart" data-icon="compass"></a>
					</li>

					<li class="navigation">
						introduction
						<a href="#intro"><img src="img/icons/nav.png" alt="o" class="navbullet" data-icon="nav"></a>
					</li>

					<li class="navigation">
						network
						<a href="#net"><img src="img/icons/nav.png" alt="o" class="navbullet" data-icon="nav"></a>
					</li>

					<li class="navigation">
						currency
						<a href="#cur"><img src="img/icons/nav.png" alt="o" class="navbullet" data-icon="nav"></a>
					</li>

					<li class="navigation">
						possibilities
						<a href="#pos"><img src="img/icons/nav.png" alt="o" class="navbullet" data-icon="nav"></a>
					</li>

					<li class="navigation">
						roadmap
						<a href="#road"><img src="img/icons/nav.png" alt="o" class="navbullet" data-icon="nav"></a>
					</li>

					<li class="navigation">
						ICO
						<a href="#ico"><img src="img/icons/nav.png" alt="o" class="navbullet" data-icon="nav"></a>
					</li>

					<li class="navigation">
						contact
						<a href="#con"><img src="img/icons/nav.png" alt="o" class="navbullet" data-icon="nav"></a>
					</li>

				</ul>
				
			<!-- social media links -->
				<ul id="socialmedia"> 

					<!--facebook-->
					<li class="socialmedia">
						<a href=""><img src="img/icons/facebook.png" alt="facebook" class="socialmediaicon" data-icon="facebook"></a>
					</li>

					<!--twitter-->
					<li class="socialmedia">
						<a href=""><img src="img/icons/twitter.png" alt="twitter" class="socialmediaicon" data-icon="twitter"></a>
					</li>

					<!--instagram-->
					<li class="socialmedia">
						<a href=""><img src="img/icons/instagram.png" alt="instagram" class="socialmediaicon" data-icon="instagram"></a>
					</li>

					<!--youtube-->
					<li class="socialmedia">
						<a href=""><img src="img/icons/youtube.png" alt="youtube" class="socialmediaicon" data-icon="youtube"></a>
					</li>
				</ul>
			<!-- email contact-->
				<a href="">
					<img src="img/icons/mail.png" alt="email" id="email_icon" data-icon="mail">
				</a>
		</nav>
	
	
	<!--left side menu, short info about unipol -->
		<aside id="slide_info">
			<p>INFO</p>
		</aside>
	
	
	<!--right side menu, info about ico -->
		<aside id="slide_ico">
			<p>ICO</p>
		</aside>
	
	
	<!-- different content sections of the page -->
		<main id="main">

			<article id="start" class="article">
				<p>UNIPOL</p>
			</article>

			<article id="intro" class="article">
				<p>INTRODUCTION</p>
			</article>

			<article id="net" class="article">
				<p>NETWORK</p>
			</article>

			<article id="cur" class="article">
				<p>CRYPTO-CURRENCY</p>
			</article>

			<article id="pos" class="article">
				<p>POSSIBILITIES</p>
			</article>

			<article id="road" class="article">
				<p>ROADMAP</p>
			</article>

			<article id="ico" class="article">
				<p>INITIAL COIN OFFERING</p>
			</article>

			<article id="con" class="article">
				<p>CONTACT</p>
			</article>

		</main>
	
</body>
</html>







