import logo from './logo.svg';
import './App.css';

import ResponsiveAppBar from './Men/Hedar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import storetitle from './ReduxToolkit/Store/Storetitle';
import Countertool from './ReduxToolkit/Countertool';
import Footer from './Men/Footer';

function App() {
  return (
    <div className="App">

    <ResponsiveAppBar/>
  
    
    <Provider store={storetitle}>
        <Countertool/>
        <Footer/>
     </Provider>
     <br/>

    

    </div>
  );
}

export default App;
