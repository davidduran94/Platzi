var className = localStorage['courseNameStorage'] ;
var message = 'Está por comenzar la clase del '
var days = localStorage['days'];
var opt={
  type: 'basic',
  title: 'Clase en Vivo',
  message: '',
  priority: 1,
  iconUrl: 'icon.png'
}
opt['message'] = message + className;
chrome.notifications.create('id', opt, function(id){})
chrome.notifications.onClicked.addListener(openUrl);

function openUrl () {
	window.open("http://cursos.mejorando.la/")
}