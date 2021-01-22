import React, { useEffect, useState } from 'react'

const useWidthScreen = () => {
    const isClient = typeof window === 'object';

    function getSize() {
        return window.innerWidth
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        console.log("side effect")

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("Clean Code");
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
}

export { useWidthScreen }