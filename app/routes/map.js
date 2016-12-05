import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        function renderMap()
        {
            var mymap = L.map('mapid').setView([0, 0], 2.4);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
                maxZoom: 10,
                minZoom: 2,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                id: 'mapbox.streets'
            }).addTo(mymap);

            var promise = $.ajax ({
 url: 'http://api.reliefweb.int/v1/reports?profile=full&limit=40&filter[field]=date.created&filter[value][from]=2015-06-01T00:00:00%2B00:00&filter[value][to]=2016-06-30T23:59:59%2B00:00',
 dataType: 'json',
 type: 'get'
}).then(function(data){
   return data.data;
}).then(function(datadata){
  var mapped = datadata.map(function(item){

    var title = item.fields.title;
    var origin = item.fields.origin;
    var url = item.fields.url;
if (JSON.stringify(item.fields.primary_country.location)){
  var lat = JSON.stringify(item.fields.primary_country.location.lat);
  var lon = JSON.stringify(item.fields.primary_country.location.lon);
}


    var source = JSON.stringify(item.fields.source);
    var nposition = source.indexOf("name");
    var nsecondposition = source.indexOf("shortname");
    var orgname =  source.substring(nposition + 7, nsecondposition - 3)
    var oposition = source.indexOf("homepage");
    var osecondposition = source.indexOf("type");
    var orglink = source.substring(oposition + 11, osecondposition - 3)

    if (origin !== undefined){
      var marker = L.marker([lat, lon]).addTo(mymap);
      marker.bindPopup("<strong>" + title + "</strong>" + "<br><a href=" + origin + " target='_new'>Read More</a><br>" +
      "Donate to <strong>" + "<a href =" + orglink + " target='_new'>" + orgname  + "</a> " + "</strong>").openPopup();
    }
    else if (url !== undefined){
        var marker = L.marker([lat, lon]).addTo(mymap);
        marker.bindPopup("<strong>" + title + "</strong>" + "<br><a href=" + url + " target='_new'>Read More</a><br>"  +
        "Donate to <strong>" + "<a href =" + orglink + " target='_new'>" + orgname  + "</a> " + "</strong>"
      ).openPopup();
    }
    else
    {
      var marker = L.marker([lat, lon]).addTo(mymap);
      marker.bindPopup("<strong>" + title + "</strong>").openPopup();
    }

  });

})

                }


                renderMap();

                return;
    }



});
