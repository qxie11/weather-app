import { useEffect } from 'react';
import { Typography } from 'antd';
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

// Actions

// Components

// Styles
import styles from './styles.module.scss';
import {fetchCityWeather} from "../../store/slices/city-detail";

const CityIdPage = () => {
    const { Title } = Typography;
    const { Paragraph } = Typography;

    const dispatch = useDispatch();
    const currentCity = useSelector(({ cityDetailReducer }) => cityDetailReducer.cityDetail);
    const { cityId } = useParams();

    useEffect(() => {
        dispatch(fetchCityWeather(cityId));
    }, [cityId, dispatch]);

    return (
        <>
            <Helmet>
                <title>City weather</title>
            </Helmet>
            <section>
                <div className="container">
                    <Title>31</Title>
                    <Paragraph>123</Paragraph>
                </div>
            </section>
        </>
    );
};

export default CityIdPage;
