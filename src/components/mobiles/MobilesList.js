import React from "react";
import PropTypes from "prop-types";
import "./Mobiles.css";
import { Link } from "react-router-dom";

const MobileList = ({ mobiles }) => (
  <>
    {mobiles.map(mobile => {
      return (
        <div className="row p-4" key={mobile.id}>
          <div className="col-md-6 float-left">
            <img src={mobile.listUrl} />
          </div>
          <div className="col-md-5">
            <span className="mobileNameDisplay">

              <Link to={"/mobile/" + mobile.id}>{mobile.mobileName}</Link>
            </span>
            <li>{mobile.ram} GB</li>

          </div>
          <div className="col-md-1 priceDisplay">
            {mobile.price}
          </div>
        </div>
      );
    })}
  </>
);

MobileList.propTypes = {
  mobiles: PropTypes.array.isRequired
};

export default MobileList;
