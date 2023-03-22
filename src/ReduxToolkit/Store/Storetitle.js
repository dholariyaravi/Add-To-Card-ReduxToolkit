
import { configureStore } from '@reduxjs/toolkit'
import Addtocarttool from '../Addtocarttool';
import Reduger from '../../Men/Counter/Reduger';

import Reducertoool from "../Reducertoool";



const storetitle = configureStore ({
    reducer : {
         post1 : Reducertoool,

         ADD1 : Addtocarttool

        // count1 : Reduger,


    }
    
})

export default storetitle ;