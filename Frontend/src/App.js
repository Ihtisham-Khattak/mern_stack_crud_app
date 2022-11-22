import './App.css';
import SearchAppBar from './Components/SearchAppBar';
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import WorkOutForm from './Components/WorkOutForm/WorkOutForm';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Routes>
        <Route exact path='/' element={<HomePage />}>Home</Route>
        <Route exact path='/workout' element={<WorkOutForm />}>Work out</Route>
      </Routes>
    </div>
  );
}

export default App;
