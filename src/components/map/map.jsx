import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";

const iconConfig = {
  ICON_WIDTH: 27,
  ICON_HEIGHT: 39,
  ICON_URL: `./img/pin.svg`
};

const leafletConfig = {
  TILELAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
};

const Map = ({city, points}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.lat,
        lng: city.lng
      },
      zoom: city.zoom,
      marker: true
    });

    leaflet
      .tileLayer(leafletConfig.TILELAYER, {
        attribution: leafletConfig.ATTRIBUTION
      })
      .addTo(mapRef.current);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: iconConfig.ICON_URL,
        iconSize: [iconConfig.ICON_WIDTH, iconConfig.ICON_HEIGHT]
      });

      leaflet.marker({
        lat: point.lat,
        lng: point.lng
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  return (
    <div id="map" style={{height: `500px`}} ref={mapRef}></div>
  );
};

export default Map;
