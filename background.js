var field = 'useskin';
var value = "vector";
//let reMobile = /([.]m[.]|^m[.])/ //something to use for future add-on versions
const excludedUrls = [/(www|nostalgia|[.]m)[.]wikipedia[.]org/, /www[.]wiktionary[.]org/,
/[:]\/\/(.*[.]m[.]|m[.])/, /mobileaction=toggle_view_mobile/]

function redirect(requestDetails) {	
  currentUrl = requestDetails.url;  
  var url = new URL(currentUrl);  	  
  var isMatch = excludedUrls.some(function(rx) { return rx.test(currentUrl); });
  if (isMatch) {	 		
		return currentUrl;			  
  }	
  if (url.searchParams.has(field)) {		 
		return currentUrl;		
  } else {		
		url.searchParams.set(field, value);		
		return {
			redirectUrl: url.toString()
		}; 
  }
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:["*://*.wikipedia.org/*", "*://*.wiktionary.org/*", "*://commons.wikimedia.org/*", 
  "*://*.wikisource.org/*",  "*://*.wikidata.org/*", "*://*.mediawiki.org/*" ], types:["main_frame"]},
  ["blocking"]
);
