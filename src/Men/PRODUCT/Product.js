import React from 'react';
import { Provider } from 'react-redux';
import Footer from '../FOOTER/Footer';
import Hedar from '../HEDAR/Hedar';
import Countertool from '../../ReduxToolkit/Countertool';
import storetitle from '../../ReduxToolkit/Store/Storetitle';
import Counter1 from '../Counter/Counter1';




const Product = () => {
  return (
  

    <div>
        <Provider store={storetitle}>
        <Counter1/>
                <div>
                    <Hedar/>   
                </div>
            <Countertool/>
            <Footer/>
       

        </Provider>
    </div>
  );
}

export default Product ;
