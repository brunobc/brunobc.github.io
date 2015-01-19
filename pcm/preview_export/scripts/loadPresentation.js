var loadPresentation = function() {
	$.getJSON('path.json', function(path) {
		localStorage['strut-presentation-unnamed.strut'] = JSON.stringify(path, null, 2);
  });
	var presentation = localStorage.getItem('preview-string');
	var config = JSON.parse(localStorage.getItem('preview-config'));

	if (presentation) {
		document.body.innerHTML = presentation;
	//	document.body.className = config.surface + " " + document.body.className;
	}
};
