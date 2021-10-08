import React from 'react';

import './custom-button.styles.scss';


const CustomButton = ({children, isSigninWithGoogle, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''}
        ${isSigninWithGoogle? 'google-button': ''} custom-button`
        } {...otherProps}>
        {children}
    </button>
);

export default CustomButton;