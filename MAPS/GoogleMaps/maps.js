function portsMap() {
    $.getJSON('ports.json', function (json) {
        let  location = {
            center:new google.maps.LatLng(json.mallorca.latitude,json.mallorca.longitude),
            zoom:9
        };
        var portocristo = json.mallorca.port;
        var barco = {
            url: "barco_vela.png", // url
            scaledSize: new google.maps.Size(50, 50), // scaled size
        };
        var marker = new google.maps.Marker({
            position : new google.maps.LatLng(portocristo.lat, portocristo.lng),
            animation:google.maps.Animation.BOUNCE,
            icon: barco
        });
        var info_amarre = new google.maps.InfoWindow({
            content: "PortoCristo, Manacor"
        });
        google.maps.event.addListener(marker, 'click' ,function() {
            map.setZoom(15);
            map.setCenter(marker.getPosition());
            info_amarre.open(map, marker);
        });
        var map = new google.maps.Map(document.getElementById('map'), location);
        marker.setMap(map);
    });
}

portsMap();