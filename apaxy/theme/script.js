// fix links when not adding a / at the end of the URI
var uri = window.location.pathname.substr(1);
if (uri.substring(uri.length-1) != '/'){
    var indexes = u('.indexcolname'),
	i = indexes.length;
	while (i--){
	    var a = u(indexes.nodes[i]).find('a');
	    a.href = '.' + uri + '/' + a.attr('href');
	}
}
