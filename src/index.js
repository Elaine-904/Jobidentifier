import React from 'react';
import ReactDOM from 'react-dom/client';

import "normalize-css";
import './styles.css'

import App from './App';
import { NamesProvider } from './provider/names';
import { AppStateProvider } from './provider/app-state';
import { ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <NamesProvider>
        <AppStateProvider>
          <App  />
        </AppStateProvider>
      </NamesProvider>
    </ChakraProvider>
  </React.StrictMode>
);

