import Form from './Components/Form';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './Components/Content';

function App() {
  return (
    <>
      <Nav />
      <div className="entity">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/register" element={<Form />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
