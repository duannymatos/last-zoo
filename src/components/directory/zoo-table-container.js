// import React, { useState, useEffect } from "react";
// import GenericTable from "../common/generic-table-component";
// import axios from "axios";
// import CREDS from "../login/credentials";
// import { loadAnimals } from "../../redux/actions/animals-actions";
// import { connect } from "react-redux";





// const ZooTable = (props) => {

//     // const [animals, getResults] = useState([]);




//     useEffect(() => {

//         const getInventory = async _ => {

//             const results = await axios.get(CREDS.HOST + `/${props.data.searchReducers.result}`, CREDS.CONFIG);
//             // getResults(results.data);
//             // console.log(results.data[1])
//             props.getAnimals(results);
//         }
//         getInventory()

//     }, []);

//     return (
//         <div className="container-fluid">


//             {/* <GenericTable records={props.data.animalsReducer.animalResult}></GenericTable> */}

//         </div>
//     )
// };

// function mapDispatchToProps(dispatch) {
//     return {
//         getAnimals: (data) => dispatch(loadAnimals(data)),
//     };
// };

// function mapStateToProps(state) {
//     return {
//         data: state

//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ZooTable);

// // axios
//         //     .get("http://3.14.145.22:8082/houses/14") //Jenkins
//         //     // .get("http://localhost:8080/houses/15") //Local
//         //     .then((response) => {

//         //         console.log(response.data > 0)
//         //         if (response.data.length) {
//         //             setAnimals(response.data[1]);
//         //         } else {
//         //             setAnimals(response.data[0]);
//         //         }
//         //     })
//         //     .catch((response) => {
//         //         console.log(response.data)
//         //     });      

//         // const getAxios = async _ => {
//         //     return await axiosSearch("get", "/houses/inventory");
//         // }

//         // const result =
//         //     getAxios().then((response) => {

//         //         if (response.data.length) {
//         //             setAnimals(response.data[1]);
//         //         } else {
//         //             setAnimals(response.data[0]);
//         //         }
//         //     }).catch((response) => {
//         //             console.log(response.data)
//         //         })