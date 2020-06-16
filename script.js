function initMap (){
    //Map options
    let options = {
        zoom: 8,
        center: {lat:40.197512 , lng: -74.007443}
    }
    
    //New Map
    let map = new google.maps.Map(document.getElementById('map'),options)

    //Add marker
    let marker = new google.maps.Marker ({
        position: {lat:40.197512 ,lng:-74.007443},
        map: map

    });

    const infoWindow = new google.maps.InfoWindow ({
        content: "<h1> Bob's Burgers</h1>"

    });

    marker.addListener('click',function(){
        infoWindow.open(map, marker);
    })
}

$(document).ready(function () {

    //select the POPUP FRAME and show it
    $("#popup").hide().fadeIn(1000);

    //close the POPUP if the button with id="close" is clicked
    $("#close").on("click", function (e) {
        e.preventDefault();
        $("#popup").fadeOut(1000);
    });

});
