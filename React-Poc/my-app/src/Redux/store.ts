import {configureStore} from '@reduxjs/toolkit';
import { Middleware } from '@reduxjs/toolkit';
import RestaurantReducer  from './reducers'

configureStore({
    reducer: {
       restReducer:RestaurantReducer
    }
})