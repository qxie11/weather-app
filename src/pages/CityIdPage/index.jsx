import { useEffect } from 'react';
import { Button, Typography } from 'antd';
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectCityDetail } from '../../store/selectors/city-detail-selectors';
import { Link } from "react-router-dom";

// Actions
import { fetchCityWeather } from "../../store/actions/city-detail-actions";
import { clearCityDetail } from "../../store/slices/city-detail";

// Components
import Spinner from "../../components/shared/Spinner";

// Styles
import styles from './styles.module.scss';

const CityIdPage = () => {
    const { Title } = Typography;
    const { Paragraph } = Typography;
    const { Text } = Typography;

    const dispatch = useDispatch();
    const currentCity = useSelector(selectCityDetail);
    const { cityId } = useParams();

    useEffect(() => {
        dispatch(fetchCityWeather(cityId));

        return () => dispatch(clearCityDetail());
    }, [cityId, dispatch]);

    return (
        <>
            <Helmet>
                <title>City weather</title>
            </Helmet>
            <section>
                <div className="container">
                    {
                        currentCity ? <>
                            <Title className={styles.title}>{currentCity.name}, {currentCity.sys.country}</Title>
                            <Paragraph className={styles.weatherValue}><Text strong>Status:</Text> {currentCity.weather[0].main}</Paragraph>
                            <Paragraph className={styles.weatherValue}><Text strong>Temperature:</Text> {currentCity.main.temp} ℃</Paragraph>
                            <Paragraph className={styles.weatherValue}><Text strong>Temperature min:</Text> {currentCity.main.temp_min} ℃</Paragraph>
                            <Paragraph className={styles.weatherValue}><Text strong>Temperature max:</Text> {currentCity.main.temp_max} ℃</Paragraph>
                            <Paragraph className={styles.weatherValue}><Text strong>Humidity:</Text> {currentCity.main.humidity}</Paragraph>
                            <Paragraph className={styles.weatherValue}><Text strong>Pressure:</Text> {currentCity.main.pressure}</Paragraph>
                            <Paragraph className={styles.weatherValue}>
                                <Text strong>Coordinates:</Text> latitude {currentCity.coord.lat}, longitude {currentCity.coord.lon}
                            </Paragraph>
                            <Link to={`/${cityId}/detail`}>
                                <Button type="primary">More</Button>
                            </Link>
                        </> : <Spinner />
                    }
                </div>
            </section>
        </>
    );
};

export default CityIdPage;
