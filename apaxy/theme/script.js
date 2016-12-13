// fix links when not adding a / at the end of the URI
var uri = window.location.pathname.substr(1);
if (uri.substring(uri.length-1) != '/'){
	var indexes = document.getElementsByClassName('indexcolname'),
	i = indexes.length;
	while (i--){
	    var a = indexes[i].getElementsByTagName('a')[0];
	    a.href = '.' + uri + '/' + a.getAttribute('href',2);
	}
}
