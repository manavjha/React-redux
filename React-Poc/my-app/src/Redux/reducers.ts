import {getdata} from './action'
import { GET_DATA } from './constants'

const initialState = {
    cards:[],
   // cards= string[] : []
 //  values: (string | number)[]:any = ['Apple', 2, 'Orange', 3, 4, 'Banana']
}

const RestaurantReducer = (state:any = initialState,action:any) => {

    switch(action.type){
        case GET_DATA :
        return [...state, action.data]
        default:
        return state
    }

}

export default RestaurantReducer;