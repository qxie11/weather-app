import { useEffect, Fragment } from 'react';
import moment from "moment";
import { Typography } from 'antd';
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectCityForecast, selectDividedHoursAndWeeklyForecast } from '../../store/selectors/city-forecast-selectors';
import { round } from 'lodash';

// Actions
import { fetchCityForecast } from "../../store/actions/city-forecast-actions";
import { clearCityForecast } from "../../store/slices/city-forecast";

// Components
import Spinner from "../../components/shared/Spinner";
import HourlyWeatherCard from "../../components/CityDetailPage/HourlyWeatherCard";

// Styles
import styles from './styles.module.scss';

const CityDetailPage = () => {
    const dispatch = useDispatch();
    const { cityId } = useParams();

    const cityForecast = useSelector(selectCityForecast);
    const { hourly, weekly } = useSelector(selectDividedHoursAndWeeklyForecast);

    const { Title } = Typography;


    useEffect(() => {
        dispatch(fetchCityForecast(cityId));

        return () => dispatch(clearCityForecast());
    }, [cityId, dispatch]);

    return (
        <>
            <Helmet>
                <title>City forecast</title>
            </Helmet>
            <section>
                <div className="container">
                    {
                        cityForecast ? <>
                            <Title>{cityForecast.city.name}, {cityForecast.city.country}</Title>
                            <Title level={2}>Hourly</Title>
                            <div className={styles.grid}>
                                {
                                    hourly.map((hourlyForecast, i) => (
                                        <HourlyWeatherCard
                                            key={i}
                                            temperature={round(hourlyForecast.main.temp)}
                                            descOfWeather={hourlyForecast.weather[0].main}
                                            time={moment(hourlyForecast.dt_txt).format('HH:mm')}
                                        />
                                    ))
                                }
                            </div>
                            <Title level={2}>Weekly</Title>
                            <div>
                                {
                                    weekly.map((dailyForecast, i) => (
                                        <Fragment key={i}>
                                            <Title level={3}>{moment(dailyForecast[0].dt_txt).format('dddd')}</Title>
                                            <div className={styles.grid}>{dailyForecast.map((hourlyForecast, i) => (
                                                <HourlyWeatherCard
                                                    key={i}
                                                    temperature={round(hourlyForecast.main.temp)}
                                                    descOfWeather={hourlyForecast.weather[0].main}
                                                    time={moment(hourlyForecast.dt_txt).format('HH:mm')}
                                                />
                                            ))}</div>
                                        </Fragment>
                                    ))
                                }
                            </div>
                        </> : <Spinner />
                    }
                </div>
            </section>
        </>
    );
};

export default CityDetailPage;
