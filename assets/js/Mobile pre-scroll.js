if (screen.width <= 699){
		window.onload = function(){
			var divs = document.getElementsByTagName("section");

	    for (var i in divs) {
	        if (divs[i].className.indexOf("post") > -1) {
	            //Finds top of of the element
	            var top = 0;
	            var obj = divs[i];

	            if (obj.offsetParent) {
	                do {
	                    top += obj.offsetTop;
	                } while (obj = obj.offsetParent);
	            }

	            //Scroll to location
	            window.scroll(0, top);

	            break;

		}
	}
}
};
