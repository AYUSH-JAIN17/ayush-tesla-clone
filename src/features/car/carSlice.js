//Redux store that will store the cars
// Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments, and are easy to test.
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cars:["Model S","Model 3","Model X","Model Y"]
}
//creating a slice
const carSlice=createSlice(
    {
        name:"car",
        initialState,
        reducers:{}
    }
)

export const selectCars=state=>state.car.cars

export default carSlice.reducer