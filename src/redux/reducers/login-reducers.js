import { LOGGED_IN, LOGOUT } from "../actions/action-types"

const initialState = {
    loginResult: ""
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGGED_IN:
            // state.push(actions.motorcycle); - We don't want to do this, it's importante NOT to modify current state directly
            return {
                ...state,
                loginResult: action.payload
            }

        case LOGOUT:
            return {
                ...state,
                loginResult: ""
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