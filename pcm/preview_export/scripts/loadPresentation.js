var loadPresentation = function() {
	localStorage['strut-monopath'] = 'teste';
	$.getJSON('path.json', function(path) {
		localStorage['path.strut'] = path;
  });
	var presentation = localStorage.getItem('preview-string');
	var config = JSON.parse(localStorage.getItem('preview-config'));

	if (presentation) {
		document.body.innerHTML = presentation;
	//	document.body.className = config.surface + " " + document.body.className;
	}
};
