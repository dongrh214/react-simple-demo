/**
 * Created by dongruihe on 2017/7/20.
 */
import React from 'react';
import { render } from 'react-dom';

import './statics/css/base.less';


import Home from './containers/Home';

render(
    <Home/>,
    document.getElementById('root')
);