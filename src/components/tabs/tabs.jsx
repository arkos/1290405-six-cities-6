import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Tabs = ({items, activeItem, onTabChange}) => {

  const handleTabChange = (evt, item) => {
    evt.preventDefault();
    onTabChange(item);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {items.map((item) => (
            <li key={item} className="locations__item">
              <Link className={`locations__item-link tabs__item ${item === activeItem ? `tabs__item--active` : ``}`} onClick={(evt) => handleTabChange(evt, item)} to="#">
                <span>{item}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeItem: PropTypes.string,
  onTabChange: PropTypes.func.isRequired
};

export default Tabs;
