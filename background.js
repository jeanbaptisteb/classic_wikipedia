let pattern = "https://*.wikipedia.org/*";
var field = 'useskin';
var value = "vector";

function redirect(requestDetails) {
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
  {urls:[pattern], types:["main_frame"]},
  ["blocking"]
);
