import React from 'react';
import PropTypes from 'prop-types';

import * as Style from './style';

const Main = ({ title, description }) => (
  <Style.Wrapper>
    <Style.Logo
      src="/img/logo.svg"
      alt="Imagem de átomo e ao lado Boilerplate React"
    />
    <Style.Title>{title}</Style.Title>
    <Style.Description>{description}</Style.Description>
    <Style.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente a um monitor com códigos"
    />
  </Style.Wrapper>
);

Main.defaultProps = {
  title: 'Boilerplate',
  description: 'ReactJS, NextJS e Stiled Components'
};

Main.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Main
