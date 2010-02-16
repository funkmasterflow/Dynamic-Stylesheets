function addStyleSheet(src){	
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = src;	
	document.getElementsByTagName('head')[0].appendChild(link);	
}

function addStyleSet(styleset){
	var style = document.createElement('style');
	style.innerHTML = styleset;
	document.getElementsByTagName('head')[0].appendChild(style);
}