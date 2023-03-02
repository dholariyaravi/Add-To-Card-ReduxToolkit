import logo from './logo.svg';
import './App.css';

import ResponsiveAppBar from './Men/Hedar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import storetitle from './ReduxToolkit/Store/Storetitle';
import Countertool from './ReduxToolkit/Countertool';
import Footer from './Men/Footer';
import Counter1 from './ReduxToolkit/Counter/Counter1';

function App() {
  return (
    <div className="App">

    <ResponsiveAppBar/>
  
    
    <Provider store={storetitle}>
        <Counter1/>
        
        <Countertool/>
        <Footer/>

     </Provider>

     <br/>
  


    

    </div>
  );
}

export default App;
