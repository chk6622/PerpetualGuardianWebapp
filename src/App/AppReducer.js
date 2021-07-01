import { UPDATE_FILE_INFORMATION_LIST } from './Actions';



const AppReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_FILE_INFORMATION_LIST:
            return action.payload;
        default:
            return state;
    }

}

export default AppReducer;