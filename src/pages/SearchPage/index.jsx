import { Input, Row } from 'antd';

// Components
import BackButton from '../../components/shared/BackButton';

// Hooks
import useDebounce from '../../hooks/useDebounce';

// Requests
import { getListOfCities } from "../../requests/weather";

// Styles
import styles from './styles.module.scss';

const SearchPage = () => {
    const handleSearchCity = ({ target }) => {
        (async () => {
            const { value } = target;
            if (value.length > 2 && value.length < 13) {
                console.log(await getListOfCities(value));
            }
        })();
    }
    const debouncedSearchCity = useDebounce(handleSearchCity);

    return (
        <section>
            <div className="container">
                <Row className={styles.topNavWrapper}>
                    <BackButton />
                    <Input
                        onInput={debouncedSearchCity}
                        className={styles.searchCitiesInput}
                        placeholder="City name"
                        maxLength="12"
                    />
                </Row>
            </div>
        </section>
    );
};

export default SearchPage;
