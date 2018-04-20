import React, { Component } from 'react';
import {connect} from 'react-redux'
import TableOfEvents from '../../../components/shopOwner/Staristics/TableOfEvents'
import {actHandleGetEventsList} from '../../../actions/EventManagementAction'
class TableOfEventsCTT extends Component {
    componentWillMount (){
        this.props.onGetEventsList (this.props.dataShop.data.store_Details.Store_ID)
    }

    render() {
        const {dataEventsList} = this.props
        if (dataEventsList)
        {
            if (dataEventsList.message.success)
                return (
                    <TableOfEvents
                        dataEventsList = {dataEventsList}
                    />
                )
            else 
                return (
                    <p>Something was wrong</p>
                )
        }
        else {
            return (
                <p>Loading...</p>
            )
        }
    }
};

const mapStyleToProps = (state) => {
    return {
      dataEventsList: state.handleGetEventsList,
      dataShop: state.handleGetShopDetail
    }
  }
  
const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetEventsList:  (id) => {
            dispatch (actHandleGetEventsList(id))
        }
    }
}
export default connect (mapStyleToProps,mapDispatchToProps) (TableOfEventsCTT)
