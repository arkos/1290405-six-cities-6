import React, {useState} from 'react';
import PropTypes from 'prop-types';

const SortMenu = ({onMenuClick, onMenuSelect, items}) => {
  const [isOpen, setIsOpen] = useState(false);

  const activeItem = items.find((item) => item.active);

  const handleMenuClick = (evt) => {
    setIsOpen(!isOpen);
    onMenuClick(evt);
  };

  const handleMenuSelect = (evt) => {
    const {target} = evt;
    if (target.tagName === `LI`) {
      onMenuSelect(target.dataset.item);
    }
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleMenuClick}>
        {activeItem && activeItem.label}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`} onClick={handleMenuSelect}>
        {
          items.map((item) =>
            (
              <li key={item.value} className={`places__option ${item.active ? `places__option--active` : ``}`} tabIndex="0" data-item={item.value}>{item.label}</li>
            ))
        }
      </ul>
    </form>
  );
};

SortMenu.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
  onMenuSelect: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    active: PropTypes.bool
  }))
};

export default SortMenu;
