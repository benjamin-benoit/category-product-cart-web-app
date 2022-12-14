import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Products from './pages/Products/Products';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 30_000,
          },
        },
      })
  );

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/:categoryId" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
