import { Redirect, useParams } from 'react-router';

const IntegerParamGuard = ({ children, paramName }) => {
    const param = useParams()[paramName];

    if ((/^\d{7}$/).test(param)) {
        return children;
    }

    return <Redirect to="/search" />;
}

export default IntegerParamGuard;