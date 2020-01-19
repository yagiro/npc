import { useEffect, useState } from 'react';

/**
 *
 * @param {boolean} isOpen
 * @param {number} timeout delay of changing 'display' css property to 'none', when component disappear
 * @returns {{display: string, opacity: number}} current value of 'display' and 'opacity' css props
 */

const defaultDisplay = 'flex';

export const useFadeAnimation = (isOpen, timeout) => {
    const [ display, setDisplay ] = useState(defaultDisplay);
    const [ opacity, setOpacity ] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setDisplay(defaultDisplay);
            setTimeout(() => setOpacity(1), 0);
        } else {
            setOpacity(0);
            setTimeout(() => setDisplay('none'), timeout);
        }
    }, [ isOpen, timeout ]);

    return { display, opacity };
};