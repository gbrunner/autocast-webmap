require(["esri/WebMap", "esri/views/MapView"], function (WebMap, MapView) {
        var webmap = new WebMap({
          portalItem:{
             id:"4be43a7b42ef4320bf995e490dbad21b"
          }
        });

        var view = new MapView({
          container: "viewDiv",
          map: webmap,
          zoom: 4,
          center: [14, 65] // longitude, latitude
        });
      });
