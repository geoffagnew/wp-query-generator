$(function() {
	// Cache the inputs
 	var $oldUrl = $('#old-url').val();
 	var $newUrl = $('#new-url').val();

 	function replaceStrings(oldUrl, newUrl) {
 		// Site url and home url
 		var siteHomeUrl = "UPDATE wp_options SET option_value = replace(option_value, '" + oldUrl + "', '" + newUrl + "') WHERE option_name = 'home' OR option_name = 'siteurl';";
 		// Site url and home url
 		var guid = "UPDATE wp_posts SET guid = REPLACE (guid, '" + oldUrl + "', '" + newUrl + "');"
 		return siteHomeUrl;
 		return guid;
 	}

 	console.log(replaceStrings('localhost:8000', 'http://sumnerpowell.com'));
});
