import {createSlice} from '@reduxjs/toolkit'

const photo = createSlice({
    name: 'photos',
    initialState: [],
    reducers: {
        addphoto: (state,action) => {
            state.push(action.payload)
        }
    }
})

const {reducer,actions} = photo;
export const {addphoto} = actions
export default reducer;