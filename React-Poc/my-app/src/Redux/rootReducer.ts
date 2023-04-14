import { combineReducers } from "redux";

import RestaurantReducer from './reducers'

export const rootReducer = combineReducers({restReducer:RestaurantReducer })
