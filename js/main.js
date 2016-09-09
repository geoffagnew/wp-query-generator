$(function() {
	var $userOldUrl;
 	var $userNewUrl;
 	var $output = $('.output-wrap');

 	// MySQL queries
 	var siteHomeUrl = "UPDATE wp_options SET option_value = replace(option_value, 'OLDURL', 'NEWURL') WHERE option_name = 'home' OR option_name = 'siteurl';";
 	var guid = "UPDATE wp_posts SET guid = REPLACE (guid, 'OLDURL', 'NEWURL');";
 	var urlContent = "UPDATE wp_posts SET post_content = REPLACE (post_content, 'OLDURL', 'NEWURL');";
 	var postMeta = "UPDATE wp_postmeta SET meta_value = REPLACE (meta_value, 'OLDURL','NEWURL');"

 	// function to replace the old and new urls in queries
 	function replaceStrings(oldUrl, newUrl, queryStr) {
  		queryStr = queryStr.replace('OLDURL', $userOldUrl);
  		queryStr = queryStr.replace('NEWURL', $userNewUrl);
		return queryStr;
 	}

 	// Execute the replaceStrings function and combine all the strings into one html block
 	function combineStrings() {
 		var allQueries = 
 		'<ul>' +
 		'<li>' + replaceStrings($userOldUrl, $userNewUrl, siteHomeUrl) + '</li>' + 
 		'<li>' + replaceStrings($userOldUrl, $userNewUrl, guid) + '</li>' +  
 		'<li>' + replaceStrings($userOldUrl, $userNewUrl, urlContent) + '</li>' +
 		'<li>' + replaceStrings($userOldUrl, $userNewUrl, postMeta); + '</li>' +
 		'</ul>';
 		return allQueries;
 	}

 	// Event listener for form
 	$('#btn').on('click', function(e) {
 		e.preventDefault();
 		$userOldUrl = $('#old-url').val();
 		$userNewUrl = $('#new-url').val();
 		if ($userOldUrl.length > 0 && $userNewUrl.length > 0) {
 			$output.html('<div class="output">' + combineStrings() + '</div>');
 		} else {
 			$output.html('<div class="output">' + 'Please enter a value in the fields above.' + '</div>');
 		}
 	});

});
