/* //Obter coordenadas de campos de texto
$('#send_coordinates').click(function(){
    var latitud = $('#lat').val();
    var longitud = $('#lng').val();

    coord = {
        lat: latitud,
        lng: longitud
    }

    generateMap(coord);

}); */
//Inicia o mapa,  que receve as coordenadas quando o usuario faze clic no mapa
function initMap(){
  
        var latitud = -21.1282098;
        var longitud = -56.4878942;

        coord = {
            lat: latitud,
            lng: longitud
        }
 
        generateMap(coord);
}

function generateMap(coord){
    var map = new google.maps.Map(document.getElementById('map_container'),
   {
      zoom: 10, //centra o mapa
      center: new google.maps.LatLng(coord.lat, coord.lng)
    });
    //Cria o icon de indicacao no mapa
     marker = new google.maps.Marker({
        map: map,
        //permite mover icon de indicacao no mapa
        draggable: true, 
        position: new google.maps.LatLng(coord.lat, coord.lng)
      });

      //Evento permite  colocar no campus de texto a longitud e latitud onde foi dexaido o icon de identicacao
      marker.addListener('dragend', function(event){
        document.getElementById('lat').value = this.getPosition().lat();
        document.getElementById('lng').value = this.getPosition().lng();
      })
  
}
  