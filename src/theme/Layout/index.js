import React from 'react';
import Layout from '@theme-original/Layout';
import Root from '../Root';

export default function LayoutWrapper(props) {
    return (
        <Root>
            <Layout {...props} />
        </Root>
    );
}
