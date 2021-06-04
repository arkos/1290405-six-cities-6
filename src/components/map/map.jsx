import React, {useEffect, useRef} from 'react';
import mapProp from './map.prop';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const iconConfig = {
  ICON_WIDTH: 27,
  ICON_HEIGHT: 39,
  ICON_URL: `./img/pin.svg`,
  ICON_ACTIVE_URL: `./img/pin-active.svg`
};

const leafletConfig = {
  TILELAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
};

const Map = ({city, points, activePoint}) => {
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
        iconUrl: activePoint && activePoint.lat === point.lat && activePoint.lng === point.lng ? iconConfig.ICON_ACTIVE_URL : iconConfig.ICON_URL,
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
  }, [city, points]);

  useEffect(() => {
    mapRef.current.eachLayer((layer) => {
      if (layer.options.icon) {
        const pointLocation = layer.getLatLng();
        const customIcon = leaflet.icon({
          iconUrl: activePoint && activePoint.lat === pointLocation.lat && activePoint.lng === pointLocation.lng ? iconConfig.ICON_ACTIVE_URL : iconConfig.ICON_URL,
          iconSize: [iconConfig.ICON_WIDTH, iconConfig.ICON_HEIGHT]
        });
        layer.setIcon(customIcon);
      }
    });
  }, [activePoint]);

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = mapProp;

export default Map;
