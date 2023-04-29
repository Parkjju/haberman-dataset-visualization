import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '../store';
import { createGlobalStyle } from 'styled-components';

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`

main p img{
    width:50%;
    display: block;
    margin:0 auto;
    margin-bottom:40px;
}
`;

export default function Root({ children }) {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </Provider>
    );
}
