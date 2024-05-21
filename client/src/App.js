import './App.css';

import { Routes,Route} from "react-router-dom";



import Loading from './Component/loading/Loading';
import Login from './Component/Login/Login'
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
              <Route path='/' element={<Loading/>}/>
              <Route path='/login' element={<Login/>}/>
              {/*
              <Route path='/detail/:id' element={<Detail/>}/>
              <Route path='/form' element={<Form/>}/>
        <Route path='/about' element={<About/>}/>*/}
        
      </Routes>
      <Footer/>


    </div>
  );
}

export default App;
