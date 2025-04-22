import React from "react";
import animalsReducer from "./animals-reducers"
import { shallow } from "enzyme"
import { LOAD_ANIMALS, LOGOUT, CLEAR } from "../actions/action-types"
import { loadAnimals } from "../actions/animals-actions";

const initialState = {
    animalResult: "exhibits"
}

describe('Animal Reducer', () => {
    it('Returns the initial state', () => {
        expect(animalsReducer(undefined, loadAnimals("exhibits"))).toEqual({ animalResult: "exhibits" });
    });

    it('Returns the initial state', () => {
        expect(animalsReducer(undefined, loadAnimals("animals"))).toEqual({ animalResult: "animals" });
    });

    it('Returns the initial state', () => {
        expect(animalsReducer(undefined, loadAnimals("zookeepers"))).toEqual({ animalResult: "zookeepers" });
    });

    it('should handle CLEAR', () => {
        expect(animalsReducer(undefined, { type: CLEAR })).toEqual({ animalResult: [] });
    });

    it('should handle LOAD ANIMALS', () => {

        const moackData = {
            payload: "zookeepers"
        }

        expect(animalsReducer({}, loadAnimals(moackData.payload))).toEqual({ animalResult: moackData.payload });
    });
});