import React, {useEffect, useRef} from 'react';
import mapProp from './map.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

  const {location} = city || {};

  const {latitude: lat = 0, longitude: lng = 0, zoom = 0} = location || {};

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat,
        lng
      },
      zoom
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
    <div id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = mapProp;

export default Map;
