import { SELECTED_FORM, LOGOUT } from "../actions/action-types";
import { shallow } from "enzyme";
import formReducer from "../reducers/form-reducers";
import { formSelected } from "../actions/form-actions"



const initialState = {
    result: "exhibits"
}

describe('Form Reducer', () => {

    it('Returns the initial state', () => {
        expect(formReducer(undefined, formSelected("exhibits"))).toEqual({ result: "exhibits" });
    });

    it('Returns the initial state', () => {
        expect(formReducer(undefined, formSelected("animals"))).toEqual({ result: "animals" });
    });

    it('Returns the initial state', () => {
        expect(formReducer(undefined, formSelected("zookeepers"))).toEqual({ result: "zookeepers" });
    });

    it('should handle CLEAR', () => {
        expect(formReducer({}, { type: LOGOUT })).toEqual({ result: "" });
    });

    // it('should handle LOAD ANIMALS', () => {

    //     const moackData = {
    //         payload: "zookeepers"
    //     }

    //     expect(formReducer({}, loadAnimals(moackData.payload))).toEqual({ animalResult: moackData.payload });
    // });
});