import Header from './components/Header';
import Slider from './components/Slider';
import TextDesc from './components/TextDesc';
import { CartProvider } from './store/CartContext';
import './App.css';

const App = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <div className='main-content'>
          <Slider />
          <TextDesc />
        </div>
      </CartProvider>
    </>
  );
};

export default App;
