var url = window.location.href;    
var field = 'useskin';
var value = "vector";

if ('URLSearchParams' in window) {

	if(url.indexOf('?' + field + '=' + value) != -1) {
		window.stop()
		

	} else if(url.indexOf('&' + field + '=' + value) != -1) {
		window.stop()

	}
	else {
		var searchParams = new URLSearchParams(window.location.search);
		searchParams.set(field, value);	
		window.location.search = searchParams.toString();
		
	}
}