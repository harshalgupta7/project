import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Button.styles';

const Button = ({text, callback}) => (
    <Wrapper type='button' onclick={callback}>
        {text}
    </Wrapper>
);

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func
  };

export default Button;