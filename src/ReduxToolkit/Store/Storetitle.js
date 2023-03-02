
import { configureStore } from '@reduxjs/toolkit'
import Reduger from '../Counter/Reduger';
import Reducertoool from "../Reducertoool";



const storetitle = configureStore ({
    reducer : {
        post1 : Reducertoool,

        count1 : Reduger

    }
    
})

export default storetitle ;