
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Router';

function App() {
  return (
    <div >
    <RouterProvider router={router}></RouterProvider>
    <Toaster toastOptions={{
      success: {
        style: {
          background: '#99A7FF',
          border: '1px solid #713200',
          padding: '16px',
          color : '#000',
          fontSize: '20px',
        },
        duration:2000,
      },
      error: {
        style: {
          background: '#EB5C68',
          border: '1px solid #713200',
          padding: '16px',
          color : '#FFFFFF',
          fontSize: '20px',
        },
        duration:2000,
      },
    }} />
  </div>
  );
}

export default App;
