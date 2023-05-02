import { Route } from 'react-router-dom';

import Home from './pages/Home';
import MainHeader from './components/MainHeader';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about-us'>
          <AboutUs />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/contact-us'>
          <ContactUs />
        </Route>
        
      </main>
    </div>
  );
}

export default App;

