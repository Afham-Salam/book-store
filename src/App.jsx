import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';  


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> {/* Use persistor here */}
        <Navbar />
        <Outlet />
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default App;
