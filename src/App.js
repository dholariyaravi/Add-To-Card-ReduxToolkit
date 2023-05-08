import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Men/PRODUCT/Product';


// import Counter1 from './ReduxToolkit/Counter/Counter1';


function App() {
  return (
    <div className="App">

        <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Product/>}></Route>
        </Routes>
        
        </BrowserRouter>
 
      <br/>
  
    </div>
  );
}

export default App;
