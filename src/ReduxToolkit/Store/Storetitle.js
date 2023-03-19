
import { configureStore } from '@reduxjs/toolkit'
import Reduger from '../Counter/Reduger';
// import Counterslice from '../Counterslice';
import Reducertoool from "../Reducertoool";



const storetitle = configureStore ({
    reducer : {
        post1 : Reducertoool,

        // count1 : Reduger,

        // Slice1 : Counterslice



    }
    
})

export default storetitle ;