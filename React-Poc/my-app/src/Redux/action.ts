import { GET_DATA } from "./constants";

export const getdata = (data:any) => {
    return {
        type:GET_DATA,
        data
    }

}

//export default getdata;