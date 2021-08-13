import { useSelector } from 'react-redux';

// Components
import CityItem from '../CityItem';
import Spinner from '../../shared/Spinner';

// Styles
import styles from './styles.module.scss';

const CitiesList = () => {
    const citiesList = useSelector(({ citiesListReducer }) => citiesListReducer.citiesList);
    const isLoading = useSelector(({ citiesListReducer }) => citiesListReducer.citiesListLoading);

    return (
        <div className={styles.wrapper}>
            {
                !isLoading && (citiesList?.map(city => (
                    <CityItem
                        key={city.id}
                        id={city.id}
                        city={city.name}
                        country={city.sys.country}
                    />
                )))
            }
            {
                Array.isArray(citiesList) && !citiesList?.length && !isLoading && 'Nothing found'
            }
            {
                isLoading && <Spinner />
            }
        </div>
    );
};

export default CitiesList;
