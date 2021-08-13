import { Card } from 'antd';
import { Link } from 'react-router-dom';

const CityItem = ({
    id,
    city,
    country
}) => {
    return (
        <Card title={city}>
            <p><strong>Country</strong>: {country}</p>
            <Link to={`/${id}`}>Check weather</Link>
        </Card>
    );
};

export default CityItem;
