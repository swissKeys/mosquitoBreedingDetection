import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl"; // Import Mapbox
import jsonData from './data.json';

function Maps() {
  const mapContainerRef = React.useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiYmVja2liYXJ0aDI4IiwiYSI6ImNsbzl5eWp2bDBlOWwyaW11bnI0djdpODQifQ.6Gm8yQ8ceAmMHUyd91vsEg"; // Replace with your Mapbox Access Token

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12", // You can choose a different Mapbox style
      center: [-35, -20.5505], // Longitude and Latitude
      zoom: 3,
    });

    map.on('load', () => {
      // Add a geojson point source.
      // Heatmap layers also work with a vector tile source.
      map.addSource('earthquakes', {
      'type': 'geojson',
      'data': jsonData
      });
       
      map.addLayer(
      {
      'id': 'earthquakes-heat',
      'type': 'heatmap',
      'source': 'earthquakes',
      'maxzoom': 9,
      'paint': {
      // Increase the heatmap weight based on frequency and property magnitude
      'heatmap-weight': [
      'interpolate',
      ['linear'],
      ['get', 'mag'],
      0,
      0,
      6,
      1
      ],
      // Increase the heatmap color weight weight by zoom level
      // heatmap-intensity is a multiplier on top of heatmap-weight
      'heatmap-intensity': [
      'interpolate',
      ['linear'],
      ['zoom'],
      0,
      1,
      9,
      3
      ],
      // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
      // Begin color ramp at 0-stop with a 0-transparancy color
      // to create a blur-like effect.
      'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0,
      'rgba(33,102,172,0)',
      0.2,
      'rgb(103,169,207)',
      0.4,
      'rgb(209,229,240)',
      0.6,
      'rgb(253,219,199)',
      0.8,
      'rgb(239,138,98)',
      1,
      'rgb(178,24,43)'
      ],
      // Adjust the heatmap radius by zoom level
      'heatmap-radius': [
      'interpolate',
      ['linear'],
      ['zoom'],
      0,
      2,
      9,
      20
      ],
      // Transition from heatmap to circle layer by zoom level
      'heatmap-opacity': [
      'interpolate',
      ['linear'],
      ['zoom'],
      7,
      1,
      9,
      0
      ]
      }
      },
      'waterway-label'
      );
       
      map.addLayer(
      {
      'id': 'earthquakes-point',
      'type': 'circle',
      'source': 'earthquakes',
      'minzoom': 7,
      'paint': {
      // Size circle radius by earthquake magnitude and zoom level
      'circle-radius': [
      'interpolate',
      ['linear'],
      ['zoom'],
      7,
      ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
      16,
      ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50]
      ],
      // Color circle by earthquake magnitude
      'circle-color': [
      'interpolate',
      ['linear'],
      ['get', 'mag'],
      1,
      'rgba(33,102,172,0)',
      2,
      'rgb(103,169,207)',
      3,
      'rgb(209,229,240)',
      4,
      'rgb(253,219,199)',
      5,
      'rgb(239,138,98)',
      6,
      'rgb(178,24,43)'
      ],
      'circle-stroke-color': 'white',
      'circle-stroke-width': 1,
      // Transition from heatmap to circle layer by zoom level
      'circle-opacity': [
      'interpolate',
      ['linear'],
      ['zoom'],
      7,
      0,
      8,
      1
      ]
      }
      },
      'waterway-label'
      );
      });

    // Create a marker
    new mapboxgl.Marker()
      .setLngLat([-55, -20.5505])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          '<h2>Light Bootstrap Dashboard PRO React</h2>' +
            '<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p>'
        )
      )
      .addTo(map);
  }, []);

  return (
    <div className="map-container">
      <h3>Risk Hubs Heatmaps</h3>
      <div ref={mapContainerRef} style={{ width: "100%", height: "80%" }} />
    </div>
  );
}

export default Maps;
