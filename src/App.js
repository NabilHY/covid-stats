import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CountriesList from './components/CountriesList';
import CountryStats from './components/CountryStats';
import './App.css';

function App() {
  return (
    <div className="containers">
      <Header />
      <Routes>
        <Route path="/" exact element={<CountriesList />} />
        <Route path="/country/:location" exact element={<CountryStats />} />
      </Routes>
    </div>
  );
}

export default App;
