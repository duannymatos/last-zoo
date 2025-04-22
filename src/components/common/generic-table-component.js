import React from "react";
import TitleCase from "../common/title-case-component"

const GenericTable = (props) => {
    if (props.records && props.records.length) {
        return (
            <table className="table">
                <thead>
                    <tr>
                        {Object.keys(props.records[0]).map((objectKey, index) => {
                            return (
                                <th key={index}>
                                    <TitleCase content={objectKey} />
                                </th>
                            )
                        })}
                    </tr>
                </thead>

                <tbody>
                    {props.records.map((record) => {
                        return (
                            <tr key={record.id}>
                                {Object.keys(record).map((objectKey) => {
                                    return <td key={objectKey}>{record[objectKey]}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    } else {
        return <p>No Data to Show</p>
    }
}

export default GenericTable;