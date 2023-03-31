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
        <main className='main-content'>
          <Slider />
          <TextDesc />
        </main>
      </CartProvider>
    </>
  );
};

export default App;
