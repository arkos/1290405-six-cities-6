import PropTypes from 'prop-types';

export default PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: (props, propName, componentName) => {
    const value = props[propName];

    if ((!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(value)) ||
      new Date(value).toISOString() !== value) {
      return new Error(`Invalid date format '${value}' for property '${propName}' in component '${componentName}'`);
    }

    return null;
  },
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  })
});
