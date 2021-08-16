import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Typography } from 'antd';
import { selectCitiesList, selectIsCitiesListLoading } from '../../../store/selectors/cities-list-selectors';

// Components
import CityItem from '../CityItem';
import Spinner from '../../shared/Spinner';

// Styles
import styles from './styles.module.scss';

const CitiesList = () => {
    const { Paragraph } = Typography;

    const citiesList = useSelector(selectCitiesList);
    const isLoading = useSelector(selectIsCitiesListLoading);
    const isNothingFound = isEmpty(citiesList) && !isLoading;

    return (
        <div className={styles.wrapper}>
            {
                !isLoading && citiesList.map(city => (
                    <CityItem
                        key={city.id}
                        id={city.id}
                        city={city.name}
                        country={city.sys.country}
                    />
                ))
            }
            {
                isNothingFound && <Paragraph>Nothing found</Paragraph>
            }
            {
                isLoading && <Spinner />
            }
        </div>
    );
};

export default CitiesList;
