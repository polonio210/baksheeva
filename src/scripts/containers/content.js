
// import React, { Component } from 'react';
// import '../../styles/App.css';
// import { Route } from 'react-router-dom';
// import { connect } from "react-redux";
// import Access from '../pages/Access';
// import Home from '../pages/Index';
// import { push } from "react-router-redux";
// import store from '../../index';
// import '../../styles/Content.css';

// export const Content = ({ backgroundReducer }) => {



//     console.log("backgroundReducer class: ",backgroundReducer);
//     return (
//         <div className={backgroundReducer}>
      
//             <Route exact path='/' render={(props) => (
//                 <Access {...props} onClick={onClickFromAccess} />
//             )} />
//             <Route exact path="/Home" component={Home} />
//         </div>
//     );

//     function onClickFromAccess(event) {
//         console.log("CLICKEADO DESDE ACCESS");
//     }
// }


// export default Content;