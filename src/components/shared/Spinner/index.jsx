import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

// Styles
import styles from './styles.module.scss';

const Spinner = () =>  (
    <Spin className={styles.spin} indicator={<LoadingOutlined className={styles.outlined} spin />} />
);

export default Spinner;
