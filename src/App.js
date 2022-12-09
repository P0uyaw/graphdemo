import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Createauthor from './components/Createauthor';
import Layout from './components/Layout';
import Createbook from './components/Createbook';
import Editauthor from './components/Editauthor';
import Getallauthors from './components/Getallauthors'
import Getallbooks from './components/Getallbooks';
import Editbooks from './components/Editbooks';

function App() {
  return (
    <div >
     
     <BrowserRouter>
     <Routes>
     <Route exact path="/" element={<Layout />}>

        <Route path='' element={<Getallauthors />} />
        <Route path='createauthor' element={<Createauthor />} />
        <Route path='createbook/:id' element={<Createbook />} />
        <Route path='editauthor/:id' element={<Editauthor />} />
        <Route path='getallbooks' element={<Getallbooks />} />
        <Route path='editbooks/:id' element={<Editbooks />} />
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
