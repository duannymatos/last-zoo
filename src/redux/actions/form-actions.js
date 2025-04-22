import { SELECTED_FORM } from "./action-types"

export function formSelected(payload) {
    return {
        type: SELECTED_FORM,
        payload
    }
}