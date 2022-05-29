import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import GlobalStyles from './styles/global';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './router/@router';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <ToastContainer/>
      <Layout>
      <Router/>
      </Layout>
      
    </div>
  );
}

export default App;
