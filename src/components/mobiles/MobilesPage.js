import React from "react";
import { connect } from "react-redux";
import * as mobileActions from "../../redux/actions/mobileActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import MobileList from "./MobilesList";
import Checkbox from '../common/CheckBox';
import "./Mobiles.css";

const ramFilters = [
  {
    name: '4',
    key: '4 GB',
    filterValue: 4,
  },
  {
    name: '6',
    key: '6 GB',
    filterValue: 6,
  },
  {
    name: '8',
    key: '8 GB',
    filterValue: 8,
  },
  {
    name: '10',
    key: '10 GB',
    filterValue: 10,
  },
  {
    name: '12',
    key: '12 GB',
    filterValue: 12,
  },
];
class MobilesPage extends React.Component {
  filteredMobiles = [];
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const { mobiles, actions } = this.props;
    if (mobiles.length === 0) {
      actions.loadMobiles().catch(error => {
        alert("Loading mobiles failed" + error);
      });
    }
  }
  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }
  setFilteredMobiles() {
    if (this.state.checkedItems.size > 0) {
      let ramValues = [];
      for (let [key, value] of this.state.checkedItems) {
        if (value) { ramValues.push(Number(key)) }
      }
      if (ramValues.length > 0) {
        this.filteredMobiles = this.props.mobiles.filter(function (item) {
          return ramValues.indexOf(item.ram) !== -1;
        });
      }
      else this.filteredMobiles = this.props.mobiles;
    } else {
      this.filteredMobiles = this.props.mobiles;
    }
  }
  render() {
    this.setFilteredMobiles();
    return (
      <>

        <div className="sidebar">
          <span className="ml-4 mb-4 display-5"> RAM </span>
          {
            ramFilters.map(item => (

              <ul key={item.key}>
                <label >
                  <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                  <span className="ml-2">{item.key}</span>
                </label>
              </ul>

            ))
          }
        </div>

        <div className="content">
          <MobileList mobiles={this.filteredMobiles} />
        </div>

      </>
    );
  }
}
MobilesPage.propTypes = {
  mobiles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {

    mobiles: state.mobiles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMobiles: bindActionCreators(mobileActions.loadMobiles, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MobilesPage);
