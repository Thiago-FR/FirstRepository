import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends React.Component {
  render() {
    const { list } = this.props;
    return(
      <div>
        <div>
          {list.map((element, index) => <p key={ index }>{ element }</p>)}
        </div>
      </div>
    )
  }
}

List.protoType = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = (state) => ({
  list: state.listReducer,
});

export default connect(mapStateToProps)(List);