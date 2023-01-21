var field = 'useskin';
var value = "vector";
const excludedUrls = [/www[.]wikipedia[.]org/];


function redirect(requestDetails) {
  var isMatch = excludedUrls.some(function(rx) { return rx.test(requestDetails.url); });
  if (isMatch) {
		return requestDetails.url;		
  }
  if(requestDetails.url.indexOf('?' + field + '=' + value) != -1) {		
		return requestDetails.url;		
	} else if(requestDetails.url.indexOf('&' + field + '=' + value) != -1) {
		return requestDetails.url;
	} else {
	const url = new URL(requestDetails.url);
	url.searchParams.set(field, value);
	return {
    redirectUrl: url.toString()
  }; 
	}
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:["*://*.wikipedia.org/*"], types:["main_frame"]},
  ["blocking"]
);
