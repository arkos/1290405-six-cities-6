import PropTypes from 'prop-types';

export default {
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    })
  }),
  points: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }))
};
