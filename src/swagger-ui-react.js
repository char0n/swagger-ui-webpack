import React from 'react';
import ReactDOM from 'react-dom';
import SwaggerUI from 'swagger-ui-react';

const props = { url: 'https://petstore3.swagger.io/api/v3/openapi.json' };
const element = React.createElement(SwaggerUI, props);
const domContainer = document.querySelector('#swagger-ui-react');

ReactDOM.render(element, domContainer);