import { LOGGED_IN } from "./action-types"

export function userLoggedIn(payload) {
    return {
        type: LOGGED_IN,
        payload
    }
}