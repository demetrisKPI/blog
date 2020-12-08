import '../styles/globals.css'
import React from 'react'
import { AppProps } from 'next/app';
import { wrapper } from '../store';

const WrappedApp = ({Component, pageProps} : AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);
