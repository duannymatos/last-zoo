import { LOAD_ANIMALS, LOGOUT, CLEAR } from "../actions/action-types"

const initialState = {
    animalResult: [""]
}

export default function animalsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ANIMALS:
            // state.push(actions.motorcycle); - We don't want to do this, it's importante NOT to modify current state directly
            return {
                ...state,
                animalResult: action.payload

            }

        case CLEAR:
            // state.push(actions.motorcycle); - We don't want to do this, it's importante NOT to modify current state directly
            return {
                animalResult: []

            }

        case LOGOUT:
            // state.push(actions.motorcycle); - We don't want to do this, it's importante NOT to modify current state directly
            return {
                animalResult: []

            }


        // case "NEW_HOME":
        //     return {
        //         ...state,
        //         result: ""
        //     }

        default:
            return state;
    }

}