


function ControladorNavBar($location) {
  var nav = this;

  nav.estoy = function (ruta) {
    if ($location.path() != '/') {
      //Si el path empieza con la ruta que comprovamos en el html devolvemos true
      posicion = ruta.indexOf($location.path());
      if (posicion === 0) {
        return true;
      }
      return false;
    }
  }
}