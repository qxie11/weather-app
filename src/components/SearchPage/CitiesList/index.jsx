// Styles
import styles from './styles.module.scss';

const CitiesList = ({ list }) => {
    return (
        <div className={styles.wrapper}>
            {
                list?.map(city => (
                    <div key={city.id}>
                        <h1>{city.name}</h1>
                        <p>{city.sys.country}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default CitiesList;
