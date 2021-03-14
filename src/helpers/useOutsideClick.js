import {useEffect} from 'react';

//assign the reference to any react component/element and use that to tell the hook what element you are referring to.
// It will then check if the click event is outside that element and trigger the callback
function useOutsideClick(ref, callback) {
    const handleClick = e => {
        if ( ref.current && !ref.current.contains(e.target) ) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
}

export default useOutsideClick;