//$.getScript('https://s3.amazonaws.com/cart-notifications/favicon.js', function()
//$.getScript('https://s3.amazonaws.com/cart-notifications/favicon_min.js', function()
$.getScript('https://cdnjs.cloudflare.com/ajax/libs/favico.js/0.3.10/favico.min.js', function()
{
	var animation = 'fade';
	var position = 'down';
	var type = 'circle';
	var bgColor = '#d00';
	var textColor = '#fff';
	var fontFamily = 'sans-serif';
	var fontStyle = 'lighter';
	var blinkInterval = '2000';

	var favicon=new Favico({
	    animation: animation,
	    position : position,
	    type : type,
	    bgColor : bgColor,
	    textColor : textColor,
	    fontFamily : fontFamily,
	    fontStyle : fontStyle
	});
	var items_count = 0;
	// load badge on page load
	var http = new XMLHttpRequest();
	http.onload  = function() {
	    var json = JSON.parse(http.responseText);
	    items_count = json.item_count;
	    //console.log("items:" + items_count);
	  console.log("init");
	    favicon.badge(items_count);
	}; 
	http.open("GET", "/cart.js", true);
	//Send the proper header information along with the request
	http.setRequestHeader("content-type", "application/json");
	http.send();

	if (blinkInterval != 'never'){
	// set blinking notification
		setInterval(blinkingNotification, blinkInterval);
		var i = 0;
		function blinkingNotification( )
		{
			// fires only when tab is NOT active
			if (document.hidden) {
			    if (i%2 == 0){
			    	console.log("off");
			    	favicon.badge(0);
			    } else {
			    	console.log("on");
			    	favicon.badge(items_count);
			    };

			    i++;
			} 
		}

		// favicon should appear when back to active tab
		window.onfocus = function() {
			console.log("onFocus");
		    var http = new XMLHttpRequest();
		    http.onload  = function() {
		        var json = JSON.parse(http.responseText);
		        items_count = json.item_count;
		        //console.log("items:" + items_count);
		      
		        favicon.badge(items_count);
		    }; 
		    http.open("GET", "/cart.js", true);
		    //Send the proper header information along with the request
		    http.setRequestHeader("content-type", "application/json");
		    http.send();
		};
	};
});

