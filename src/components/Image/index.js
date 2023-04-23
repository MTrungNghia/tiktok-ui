import PropTypes from 'prop-types';
import { useState, forwardRef } from "react";
import classNames from "classnames";
import images from "~/assets/images";

const Image = forwardRef(({src, alt, className, fallBack=images.noImage, ...props}, ref) => {
    
    const [fallback, setFallback] = useState("");
    const handleError = () => {
        setFallback(fallBack);
    }
    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img 
            className={classNames(className)} 
            ref={ref} 
            alt={alt} 
            src={fallback || src} 
            {...props} 
            onError={handleError}
        />
    );
});

Image.propTypes ={
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
}

export default Image;