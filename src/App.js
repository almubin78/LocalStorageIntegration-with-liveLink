import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import Todos from './Todos/Todos'
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos/>
    </QueryClientProvider>
  );
}


export default App;
