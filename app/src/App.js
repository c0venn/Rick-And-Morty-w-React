import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Characters from './components/Characters/Characters';
import Character from './components/Character/Character';
import Locations from './components/Locations/Locations';
import Episodes from './components/Episodes/Episodes';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:idCharacter" element={<Character />} />
        <Route path="locations" element={<Locations />} />
        <Route path="episodes" element={<Episodes />} />
      </Route>
    </Routes>
  );
}

export default App;
