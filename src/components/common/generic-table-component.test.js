import React from "react";
import GenericTable from "./generic-table-component"
import { shallow } from "enzyme"

describe("Testing Generic Table component", () => {
    it("Renders a message with if no records are found", () => {
        const wrapperWithoutProps = shallow(<GenericTable></GenericTable>)

        expect(wrapperWithoutProps.text()).toBe("No Data to Show")
    });

    it("Renders message with empy array", () => {
        const wrapperWithEmptyArray = shallow(<GenericTable records={[]}></GenericTable>)

        expect(wrapperWithEmptyArray.text()).toEqual("No Data to Show")
    });

    it("render a table with test data", () => {
        const moackData = new Array(5).fill({
            id: 1,
            name: "Margalo",
            commonname: "Pelican, australian",
            sciname: "Pelecanus conspicillatus",
            exhibit: "41"
        });
        const wrapperWithThreeRecords = shallow(
            <GenericTable records={moackData}></GenericTable>
        )
        expect(wrapperWithThreeRecords.find("tr").length).toBe(moackData.length + 1);
        expect(wrapperWithThreeRecords.find("td").length).toBe(25);
    });

    it("Render a table with correct number of columns based on test data", () => {
        const moackData = new Array(5).fill({
            id: 1,
            name: "Margalo",
            commonname: "Pelican, australian",
            sciname: "Pelecanus conspicillatus",
            exhibit: "41"
        });
        const wrapperWithThreeRecords = shallow(
            <GenericTable records={moackData}></GenericTable>
        )
        expect(wrapperWithThreeRecords.find("tr").first().children().length).toBe(5);
    });
});