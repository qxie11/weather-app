import { useHistory } from 'react-router';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

// Styles
import styles from './styles.module.scss';

const BackButton = ({ ...rest }) => {
    const history = useHistory();

    return (
        <Button
            className={styles.button}
            onClick={() => history.goBack()}
            type="primary" icon={<ArrowLeftOutlined />}
            size={20}
            {...rest}
        />
    );
};

export default BackButton;
