import Header from './components/Header';
import Slider from './components/Slider';
import TextDesc from './components/TextDesc';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <div className='main-content'>
        <Slider />
        <TextDesc />
      </div>
    </>
  );
};

export default App;
