import logo from './logo.svg';
import './App.css';
import Addtodo from './components/Addtodo';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Searchtodo from './components/Searchtodo';
import ViewAll from './components/ViewAll';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Addtodo/>}/>
  <Route path="/Search" element={<Searchtodo/>}/>
  <Route path="/view" element={<ViewAll/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
