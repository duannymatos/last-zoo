import { LOAD_ANIMALS } from "./action-types"

export function loadAnimals(payload) {
    return {
        type: LOAD_ANIMALS,
        payload
    }
}