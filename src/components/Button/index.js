import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import {Link} from 'react-router-dom'
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

function Button( {
    to, 
    href, 
    primary = false, 
    outline = false, 
    text = false,
    disabled = false,
    small = false,
    large=false,
    children,
    rounded=false,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps 
}) {

    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if(disabled) {
        Object.key(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }
    if(to) {
        props.to = to;
        Comp = Link;
    }else if(href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        disabled,
        large,
        text,
        rounded,
        [className]: className,
    });

    return ( 
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
     );
}

Button.propTypes ={
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.string,
    children: PropTypes.node.isRequired,
    rounded: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button;