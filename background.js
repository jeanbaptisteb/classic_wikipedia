var field = "useskin";
var value = "vector";
let reMobile = /([.]m[.]|^m[.])/ 
let origin = null;
var urls_scope = ["*://*.wikipedia.org/*", "*://*.wiktionary.org/*", "*://commons.wikimedia.org/*",
  "*://*.wikisource.org/*",  "*://*.wikidata.org/*", "*://*.mediawiki.org/*"

   ];
var excludedUrls = [/(www|nostalgia|[.]m)[.]wikipedia[.]org/, /www[.]wiktionary[.]org/, 
/(.*[.]m[.]|m[.])/, 
/.*[.]m[.]wikimedia[.]org/,
/commons[.]m[.]wikimedia[.]org/,
/mobileaction=toggle_view_mobile/
] 
function mobileRedirect(requestDetails) {
	currentUrl = requestDetails.url;
	var url = new URL(currentUrl);  	
	try {
	origin = requestDetails.originUrl;
	} catch(error) {

	return currentUrl;
	}
	
	if ((origin != null) && (origin.includes("useskin=vector")) && (reMobile.test(url.hostname))){
		
		url.searchParams.delete(field);
		url.searchParams.delete("mobileaction");

		return {
		redirectUrl: url.toString()
		};
		}

}
function redirect(requestDetails) {
  currentUrl = requestDetails.url;    
  var url = new URL(currentUrl);    
  var isMatch = excludedUrls.some(function(rx) { return rx.test(url.hostname); });
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
  {urls:urls_scope, types:["main_frame"]},
  ["blocking"]
);
browser.webRequest.onHeadersReceived.addListener(
  mobileRedirect,
  {urls:urls_scope, types:["main_frame"]},
  ["blocking"]
);