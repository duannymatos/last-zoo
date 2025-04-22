import { SELECTED_FORM, LOGOUT } from "../actions/action-types"

const initialState = {
    result: "exhibits"
}

export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_FORM:

            return {
                ...state,
                result: action.payload
            }

        case LOGOUT:

            return {
                ...state,
                result: ""
            }

        default:
            return state;
    }

}

/*
- Add new motorcycle
    {type: 'CRETE_MOTORCYCLE', motorcycle: {make: "make, model: "model", year: 2020, color: "color" }}
- Load motorcycles
    {type: 'LOAD_MOTORCYCLES', motorcycles: [...]}
- Delete a motorcycle
- Login a user


*/