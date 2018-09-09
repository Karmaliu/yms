import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>2222222</div>;

const loadableRouter = (loader) => {
    return Loadable({
        ...loader,
        loading: Loading,
    })
}

export default loadableRouter;