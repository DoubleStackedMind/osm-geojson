import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Route as RoutesInfo, routes } from './routes.config';

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter basename={window.location.pathname}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          {routes.map(({ path, Component }: RoutesInfo, i: number) => {
            return <Route key={i} path={path} element={<Component />} />;
          })}
        </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
