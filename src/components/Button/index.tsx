import classNames from 'classnames/bind';
import type { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' |'sub' | 'sub-outline' | 'tertiary';
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    backgroundColor?: string;
    noPadding?: boolean;
}

const cx = classNames.bind(styles);

function Button(props: Props) {
    const {
        fullWidth, variant, children, size, color, backgroundColor, className,
        noPadding,
        ...rest
    } = props;
    return (<button
        className={cx(
            'button',
            `button-${variant}`,
            `button-${fullWidth ? 'full' : 'auto'}`,
            `button-${size}`,
            { 'no-padding': noPadding },
            className,
        )}
        style={{ color, backgroundColor }}
        {...rest} >
        {children}
    </button>);
}

export default Button;
