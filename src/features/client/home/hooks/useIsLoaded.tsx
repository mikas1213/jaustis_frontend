import { useState, useEffect } from 'react';

const useIsLoaded = (): boolean => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);

    return isLoaded;
};

export default useIsLoaded;