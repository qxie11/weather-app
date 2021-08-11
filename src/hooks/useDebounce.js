import { useCallback } from 'react';
import { debounce } from 'lodash';

const useDebounce = (callback, timeout = 500) => {
    return useCallback(debounce(callback, timeout), []);
}

export default useDebounce;