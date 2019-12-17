import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as mobileActions from "../../redux/actions/mobileActions";
import "./Mobiles.css";

function ViewMobilePage({
    mobiles,
    loadMobiles,
    ...props
}) {
    const [mobile, setMobile] = useState({ ...props.mobile });

    useEffect(() => {
        if (mobiles.length === 0) {
            loadMobiles().catch(error => {
                alert("Loading mobiles failed" + error);
            });
        } else {
            setMobile({ ...props.mobile });
        }
    }, [props.mobile]);



    return (
        <><div className="row">
            <div className="col-md-6"> <img src={mobile.singleItemUrl} /></div>
            <div className="col-md-6">
                <div className="row">{mobile.mobileName}</div>
                <div className="row priceSingleDisplay">{mobile.price}</div>

            </div>
        </div>

        </>
    );
}
ViewMobilePage.propTypes = {
    mobile: PropTypes.object,
    mobiles: PropTypes.array,
    loadMobiles: PropTypes.func.isRequired,
};
function getMobileById(mobiles, id) {
    let mobile = mobiles.filter(mobile => mobile.id === Number(id))[0];

    return mobile;
}
function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    const mobile =
        id && state.mobiles.length > 0
            ? getMobileById(state.mobiles, id)
            : undefined;
    return {
        mobile: mobile,
        mobiles: state.mobiles,
    };
}

const mapDispatchToProps = {
    loadMobiles: mobileActions.loadMobiles
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewMobilePage);
