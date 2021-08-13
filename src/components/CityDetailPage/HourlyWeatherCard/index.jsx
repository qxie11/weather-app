import { Typography, Card } from "antd";
import styles from './styles.module.scss';

const HourlyWeatherCard = ({
    temperature,
    descOfWeather,
    time,
}) => {
    const { Title } = Typography;
    const { Paragraph } = Typography;

    return <Card className={styles.card}>
        <Title level={5}>{temperature} ℃</Title>
        <Paragraph>{descOfWeather}</Paragraph>
        <Paragraph>{time}</Paragraph>
    </Card>
}

export default HourlyWeatherCard;
