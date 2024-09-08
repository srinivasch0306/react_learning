import React from "react";
import ReactDOM from "react-dom/client";
import process from 'process';
import Header from "./components/Header";
import Body from "./components/Body";
// import RestraCard from "./RestaurantCard";



/**
 *  header
 *     -logo
 *      -nav Items
 *
 *  body
 *    - Search
 *    - restraraunts container
 *          - image
 *
 *           - restra card
 *               =name
 *          -start rating
 *            -cuisine
 *
 *  footer
 *      - copyright
 *      -links
 *       - addresss of the company
 **/

// const heading=(<h1>hello eeryone</h1>);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)










const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* //header
      //body
      // footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
