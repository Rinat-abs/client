
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { ConfigProvider, theme } from 'antd';

import './index.css';
import { Paths } from './paths';
import { Login } from './pages/login';
import { Register } from './pages/register';



const router = createBrowserRouter([
  {
    path: Paths.home,
    element:<h1>home</h1>
  },
  {
    path: Paths.login,
    element: <Login/>
  },
  {
    path: Paths.register,
    element: <Register/>
  },
])


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(

    <Provider store={store}>
      <ConfigProvider theme={{
        algorithm: theme.darkAlgorithm
      }}>
        <RouterProvider router={router}/>
      </ConfigProvider>

    </Provider>
 
);

