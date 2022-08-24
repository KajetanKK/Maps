mapboxgl.accessToken = 'pk.eyJ1Ijoia2FqZXRhbjA0IiwiYSI6ImNsNzZ3ODdrNDBic3E0MHBhbTdhb2hsZmYifQ.6zvXlbSvJ_n0XPaFOOaleA';

    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true
    })

    function successLocation(position) {
      setupMap([position.coords.longitude, position.coords.latitude])
    }

    function setupMap(center) {
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
      });

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);

      var directions = new MapboxDirections({
        accessToken: 'pk.eyJ1Ijoia2FqZXRhbjA0IiwiYSI6ImNsNzZ3ODdrNDBic3E0MHBhbTdhb2hsZmYifQ.6zvXlbSvJ_n0XPaFOOaleA',
      });
 
      map.addControl(directions, 'top-left');
    }

    function errorLocation() {

    }