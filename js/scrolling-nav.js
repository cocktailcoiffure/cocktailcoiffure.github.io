//jQuery to collapse the navbar on scroll

$(document).ready(function () {

	$('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready
	
	$('#overlay').on("mouseup",function(){          // lock it when mouse up
		$('#map').addClass('scrolloff'); 
		//somehow the mouseup event doesn't get call...
	});
	$('#overlay').on("mousedown",function(){        // when mouse down, set the mouse events free
		$('#map').removeClass('scrolloff');
	});

	$("#map").mouseleave(function () {              // becuase the mouse up doesn't work... 
		$('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
													// or you can do it on some other event
	});
	
});


/*$(function(){ 
     var navMain = $("#nav-main");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });*/

/*function mobileAndTabletcheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

var mobile = mobileAndTabletcheck();

function changeCC() 
{
	if($(window).width() > 767 && !mobile)
	{
		var x = $(document).scrollTop();
		$('.cc-logo-background').css('background-position', '0% ' + parseInt((x / 2)  - ($('.cc-logo-background').offset().top/2) - 200)  + 'px');
		$('.cc-background-studio').css('background-position', '0% ' + parseInt((x / 2) - ($('.cc-background-studio').offset().top/2) - 400)  + 'px');
		$('.cc-background-volumateur').css('background-position', '0% ' + parseInt((x / 2) - ($('.cc-background-volumateur').offset().top/2))  + 'px');
		$('.cc-background-esthetique').css('background-position', '0% ' + parseInt((x / 2) - ($('.cc-background-esthetique').offset().top/2))  + 'px');
		
		$('.cc-ss-background').css('background-position', '0% ' + parseInt((x / 2) - ($('.cc-ss-background').offset().top/2))  + 'px');
	}
}*/

var locations_url = {
	"#accueil"					:"Accueil",
	"#coiffure"					:"[Coiffure] Accueil",
	"#coiffure-prestations"		:"[Coiffure] prestations",
	"#coiffure-specialites"		:"[Coiffure] specialites",
	//"#coiffure-produits"		:"[Coiffure] produits",
	//"#coiffure-materiels"		:"[Coiffure] materiels",
	
	"#studio-capillaire"		:"[Studio capillaire] Accueil",
	"#perruques"				:"[Studio capillaire] perruques",
	"#soins-accessoires"		:"[Studio capillaire] soins-accessoires",
	"#volumateurs"				:"[Studio capillaire] volumateurs",
	"#complements-capilaire"	:"[Studio capillaire] complements-capilaire",
	"#protheses"				:"[Studio capillaire] protheses",
	"#extensions"				:"[Studio capillaire] extensions",
	
	"#esthetique"				:"[Esthetique] Accueil",
	"#esthetique-prestations"	:"[Esthetique] prestations",
	"#esthetique-onglerie"		:"[Esthetique] onglerie",
	"#esthetique-specialites"	:"[Esthetique] specialites",
	"#esthetique-produits"		:"[Esthetique] produits",
	
	"#about-equipe"				:"[Contact] equipe",
	"#about-partenaires"		:"[Contact] partenaires",
	"#about-contact"			:"[Contact] contact"
};

var scrollTimeOut;
var currentScroll;


$(window).on('hashchange', function(event){
	event.preventDefault();
	var anchor = window.location.hash;
	
	$('html, body').stop().animate({
		scrollTop: (anchor=='#accueil' || anchor=='')?0:$(anchor).offset().top
	}, 1500, 'easeInOutExpo');
	
	currentScroll = locations_url[anchor];
	ga('send', 'pageview', locations_url[anchor]);
	
});


$(window).on('scroll', function(event){
	if(scrollTimeOut)
		clearTimeout(scrollTimeOut);
	
	scrollTimeOut = setTimeout(function(){
		onStopScroll(event);
	}, 2000);
});

function onStopScroll(event) {
	var scrollPosition = $(window).scrollTop();
	var currentAnchor; 
	
	var find = false;
	
	for (var key in locations_url)
	{
		if(scrollPosition > $(key).position().top - 50)
			currentAnchor = key;
		else
		{
			if(currentScroll != currentAnchor)
			{
				find = true;
				currentScroll = locations_url[currentAnchor];
				
				ga('send', 'pageview', locations_url[currentAnchor]);
				console.log(locations_url[currentAnchor]);
			}
			break;
		}
	}
	
	if(!find)
	{
		currentScroll = locations_url["#about-contact"];
				
		ga('send', 'pageview', locations_url["#about-contact"]);
		console.log(locations_url["#about-contact"]);
	}
}



//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    
	
	$('.page-scroll').bind('click', function(event) {
        event.preventDefault();
		var $anchor = $(this);
		$('html, body').stop().animate({
            scrollTop: ($anchor.attr('href')=='#accueil' || $anchor.attr('href')=='')?0:$($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo', function(){
			window.location.hash = $anchor.attr('href');
		});
    });
	
	$('.cc-logo-es').hover(function(event) {
        $(".cc-logo-es .cc-logo").addClass("cc-white-transparancy");
    },function(event) {
        $(".cc-logo-es .cc-logo").removeClass("cc-white-transparancy");
    });
	
	$('.cc-logo-sc').hover(function(event) {
        $(".cc-logo-sc .cc-logo").addClass("cc-white-transparancy");
    },function(event) {
        $(".cc-logo-sc .cc-logo").removeClass("cc-white-transparancy");
    });
	
	$('.cc-logo-co').hover(function(event) {
        $(".cc-logo-co .cc-logo").addClass("cc-white-transparancy");
    },function(event) {
        $(".cc-logo-co .cc-logo").removeClass("cc-white-transparancy");
    });
});
