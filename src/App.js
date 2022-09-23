import { useEffect } from 'react';
import './App.scss';
import Navigation from './components/navigation/Navigation';
import pizza from './store/pizza';

const App = () => {
  useEffect(() => {
    pizza.fetchDataPizza();
  }, []);

  return (
    <div className="wrapper">
      <Navigation />
    </div>
  );
};

export default App;
