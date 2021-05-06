import PropTypes from 'prop-types';
import {roomTypeToNameMap} from '../../util/common';

const RATING_MIN = 0;
const RATING_MAX = 5;

export default PropTypes.shape({
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  rating: (props, propName, componentName) => {
    if (typeof (props[propName]) === `number` && props[propName] > RATING_MIN && props[propName] <= RATING_MAX) {
      return null;
    }

    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Must be a number between ${RATING_MIN} and ${RATING_MAX}`);
  },
  type: PropTypes.oneOf(Object.keys(roomTypeToNameMap))
});
