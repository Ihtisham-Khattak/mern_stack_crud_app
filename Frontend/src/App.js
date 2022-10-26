import './App.css';
import SearchAppBar from './Components/SearchAppBar';
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Routes>
        <Route exact path='/' element={<HomePage />}>Home</Route>
      </Routes>
    </div>
  );
}

export default App;
