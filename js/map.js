"use strict";

function bouncyMap(){
    let mapField = document.getElementById('map'),
        mapCenter = new google.maps.LatLng(49.858742,24.020850),
        mapOptions = {
            center : mapCenter,
            zoom : 5
        },
        map = new google.maps.Map(mapField,mapOptions),
        marker = new google.maps.Marker({
            position : mapCenter
        });
        
        marker.setMap(map);
    };
     
    