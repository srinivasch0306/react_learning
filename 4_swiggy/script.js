import React from "react";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        ></img>
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestraCard = (props) => {
  console.log(props);
  return (
    <div className="Res-Card">
      <img
        className="meghana"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/46463436B.png"
      ></img>

      <div className="name">
        <h1>{props.ResName}</h1>
        <h3><span class="fa fa-star checked"></span> {props.Delivery}</h3>
        <p>{props.Cuisine}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="Body">
      <div className="SearchBar">Search</div>
      <div className="Res-Container">
        {/* // restraraunts card */}
        <RestraCard ResName="Meghana Foods" Cuisine="Briyani" Delivery="4 30-40 Min"/>
        <RestraCard ResName="Empire Foods" Cuisine="North ,SouthIndian foods" Delivery="4.4 15 Min"/>
        <RestraCard ResName="KFC" Cuisine="Fast Foods" Delivery=" 4.7 10 Min"/>
        {/* <RestraCard/>
        <RestraCard/>
        <RestraCard/>
        <RestraCard/> */}
      </div>
    </div>
  );
};

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
