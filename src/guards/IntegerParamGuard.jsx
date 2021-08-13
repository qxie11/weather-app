import { Redirect, useParams } from "react-router";

const IntegerParamGuard = ({ children, paramName }) => {
    const param = useParams()[paramName];

    if (!Number.isInteger(+param)) {
        return <Redirect to="/search" />;
    }

    return children;
}

export default IntegerParamGuard;