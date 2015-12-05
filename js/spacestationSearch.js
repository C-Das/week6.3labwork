$(document).ready(function(){
    
    $(".btn-default").on("click",function(e){
      e.preventDefault();

      var userAddress = $("#userAddress").val();
      var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
          googleApiUrl += "key=AIzaSyCxOOMQbm0o18JDWg7gbzcTEw6p0UAl3Lk";
          googleApiUrl += "&address=" + userAddress;

      $.ajax({
        type:"GET",
        url:googleApiUrl,
        success:googleApiSuccessHandler
      });
    });

  function googleApiSuccessHandler(response) {

    console.log(response);

    var geoLocation = response.results[0].geometry.location;
    var openNotify = "http://api.open-notify.org/iss-pass.json?"
        openNotify += "lat="+ geoLocation.lat;
        openNotify += "&lon="+ geoLocation.lng;

    console.log("ISS API Response"+openNotify);

    $.ajax({
      type : "GET",
      url : openNotify,
      success : openNotifyApiSuccessHandler
    });

    function openNotifyApiSuccessHandler (response) {

      for (i=0 ; i < response.length ; i++){
        console.log (response[i]);
      }
    }
    /*
    var geoLocation = response.results[0].geometry.location;
    var flickrApiUrl = "https://api.flickr.com/services/rest/?";
    var flickrApiParams = {
      api_key: "0c3196d005e2e6c57733db35de61d824",
      method: "flickr.photos.search",
      format: "json",
      nojsoncallback: 1,
      lat: geoLocation.lat,
      lon: geoLocation.lng
    }
    
    $.ajax({
      type: "GET",
      url: flickrApiUrl + $.param(flickrApiParams),
      success: flickrSuccessHandler
    }); */
  }

  function flickrSuccessHandler (response) {

  }
});