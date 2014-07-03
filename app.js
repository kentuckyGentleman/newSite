$('#nav').hide();
// $('.white').hide();
$(".story").slick({
	arrows: false,
	cssEase: "ease",
	draggable: false,
	infinite: false,
	speed: 1700
});

var currentSlide = $(".story").slickCurrentSlide();
var nav = $("#nav li");
var navIndex = $.makeArray(nav);

getCurrentSlide = function(){
	var currentSlide = $(".story").slickCurrentSlide();
	var navSlideIndex = navIndex[currentSlide];

	$(nav).css("opacity",".3");
	$(navSlideIndex).css("opacity","1");
	console.log(navSlideIndex, currentSlide);
	

	if(currentSlide == 0){
		$("#getInTouch").fadeIn(1000);
		$("body").css("background-color","white");
		// $(".slide").removeClass("white");
		$("#nav").fadeOut(500, function(){
			$("#headerNavContainer .image").fadeIn(1500);
			$(".nameContainer").css("color","black");
		});
	} 
	if (currentSlide > 0 && currentSlide < 4){
		$("#getInTouch").fadeIn(1000);
		$("body").css("background-color","black");
		// $(".slide").addClass("white");
		$(".nameContainer").css("color","transparent");
		$("#headerNavContainer .image").fadeOut(1000, function(){
			$("#nav").fadeIn(1500);
		});
	} 
	if (currentSlide == 4){
		$("body").css("background-color","white");
		// $(".slide").removeClass("white");
		$("#getInTouch").fadeOut(500);
	}
	// console.log(currentSlide);
}

//Get index of clicked link and apply index to slickGoTo
	$(nav).on("click", function(event){
		event.preventDefault();
		var linkIndex = $("#nav li").index(this);
		// console.log(linkIndex);
		$(".story").slickGoTo(linkIndex);
		getCurrentSlide();	
	}).on("hover", function(){
		$(nav).css("opacity","1");
	});

//Roll over to either side of window shifts slide content to either side of window
	var $left = $("#hitLeft");
	var $right = $("#hitRight");
	var $story = $(".slide p h2");
	var $slideContent = $(".slideContent");
	// var $p = $("#story p");

//Left mouseover & click
	$left.mouseover( function(){
		var currentSlide = $(".story").slickCurrentSlide();
		if(currentSlide > 0){
			$(this).css("cursor","pointer");
			$slideContent.css("transform", "translate(-5%, 0)");
		} else {
			$(this).css("cursor","default");
		}
	}).mouseout( function(){
		var currentSlide = $(".story").slickCurrentSlide();
			$slideContent.css("transform", "translate(0, 0)");
	}).click( function(){
		var currentSlide = $(".story").slickCurrentSlide();
		if(currentSlide > 0){
			$(".story").slickPrev();
			getCurrentSlide();
			console.log($(".story").slickCurrentSlide());
		}
	});

//Right mouseover & click
	$right.mouseover( function(){
		var currentSlide = $(".story").slickCurrentSlide();
		if(currentSlide < 4){
			$(this).css("cursor","pointer");
			$slideContent.css("transform", "translate(5%, 0)")
		} else {
			$(this).css("cursor","default");
		}
	}).mouseout( function(){
		$slideContent.css("transform", "translate(0, 0)")
	}).click(function(){
		if(currentSlide < 4){
			$(".story").slickNext();
			getCurrentSlide();
			console.log($(".story").slickCurrentSlide());
		}
	});

	$("#getInTouch").click(function(){
		getCurrentSlide();
		$(".story").slickGoTo(4);
		$("svg").css("fill","#000000");
	})