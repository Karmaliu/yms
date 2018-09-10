import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from 'antd';

const Loading = () => <div><Spin></Spin></div>;

const loadableRouter = (loader) => {
    return Loadable({
        ...loader,
        loading: Loading,
    })
}

export default loadableRouter;