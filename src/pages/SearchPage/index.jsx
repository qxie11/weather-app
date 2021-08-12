import { useRef, useEffect } from 'react';
import { Input, Row } from 'antd';
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux';

// Actions
import { fetchCitiesList } from "../../store/slices/cities-list";

// Components
import BackButton from '../../components/shared/BackButton';
import CitiesList from '../../components/SearchPage/CitiesList';

// Hooks
import useDebounce from '../../hooks/useDebounce';

// Styles
import styles from './styles.module.scss';

const SearchPage = () => {
    const searchInputRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        searchInputRef.current.focus();
    }, []);

    const handleSearchCity = ({ target }) => {
        const { value } = target;
        if (value.length > 2 && value.length < 13) {
            dispatch(fetchCitiesList(value));
        }
    }
    const debouncedSearchCity = useDebounce(handleSearchCity);

    return (
        <>
            <Helmet>
                <title>Search cities</title>
            </Helmet>
            <section>
                <div className="container">
                    <Row className={styles.topNavWrapper}>
                        <BackButton />
                        <Input
                            ref={searchInputRef}
                            onInput={debouncedSearchCity}
                            placeholder="City name"
                            maxLength="12"
                        />
                    </Row>
                    <CitiesList />
                </div>
            </section>
        </>
    );
};

export default SearchPage;
