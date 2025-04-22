import { SEARCH_SELECTED } from "./action-types"

export function searchSelected(payload) {
    return {
        type: SEARCH_SELECTED,
        payload
    }
}