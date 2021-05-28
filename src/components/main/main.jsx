import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Map from '../map/map';
import {StoreStatus} from '../../util/const';
import {fetchFavorites, fetchOffers} from '../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import {selectFavoritesStatus, selectOffersStatus, selectCurrentCity, selectLocationsInCurrentCity, selectOffersInCurrentCity} from '../../store/selectors';
import OfferList from '../offer-list/offer-list';
import Loading from '../loading/loading';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../util/route';
import SignInIndicator from '../sign-in-indicator/sign-in-indicator';
import SortMenu from '../sort-menu/sort-menu';
import {selectAllOffers} from '../../store/data/data';
import Tabs from '../tabs/tabs';
import {getUniqueCities} from '../../util/common';
import {changeFilter} from '../../store/process/process';

const menuItems = [
  {label: `Popular`, value: `popular`, active: true},
  {label: `Price: low to high`, value: `asc`},
  {label: `Price: high to low`, value: `desc`},
  {label: `Top rated first`, value: `top`},
];

const Main = () => {
  const dispatch = useDispatch();

  const allOffers = useSelector(selectAllOffers);

  const offersInCurrentCity = useSelector(selectOffersInCurrentCity);

  const offersLoadingState = useSelector((state) => selectOffersStatus(state));

  const favoritesLoadingState = useSelector((state) => selectFavoritesStatus(state));

  const cities = getUniqueCities(allOffers);
  const activeCity = useSelector(selectCurrentCity);
  const points = useSelector(selectLocationsInCurrentCity);

  useEffect(() => {
    if (offersLoadingState.status === StoreStatus.IDLE) {
      dispatch(fetchOffers());
    }
  }, [offersLoadingState, dispatch]);

  useEffect(() => {
    if (favoritesLoadingState.status === StoreStatus.IDLE && offersLoadingState.status === StoreStatus.SUCCEEDED) {
      dispatch(fetchFavorites());
    }
  }, [favoritesLoadingState, offersLoadingState, dispatch]);

  if (offersLoadingState.status === StoreStatus.LOADING) {
    return <Loading title={`Loading accomodations ...`}/>;
  }

  if (favoritesLoadingState.status === StoreStatus.LOADING) {
    return <Loading title={`Loading favorites ...`}/>;
  }

  const handleMenuSelect = (currentItem) => {
    menuItems.forEach((item) => {
      item.active = item.value === currentItem;
    });
  };

  const handleTabChange = (activeItem) => {
    dispatch(changeFilter(activeItem));
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.ROOT} className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <SignInIndicator />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs items={cities} onTabChange={handleTabChange} activeItem={activeCity && activeCity.name} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${offersInCurrentCity && offersInCurrentCity.length} places to stay in ${ activeCity && activeCity.name}`}</b>
              <SortMenu onMenuClick={() => {}} onMenuSelect={handleMenuSelect} items={menuItems}/>
              <OfferList offers={offersInCurrentCity}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={activeCity} points={points} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offersCount: PropTypes.number.isRequired
};

export default Main;
