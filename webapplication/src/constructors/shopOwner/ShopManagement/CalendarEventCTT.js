import React, { Component } from 'react';
import {connect} from 'react-redux'
import CalendarEvent from '../../../components/shopOwner/ShopManagement/CalendarEvent'
class CalendarEventCTT extends Component {

  render() {
    const {dataEventsList, dataShop} = this.props
    if (dataEventsList)
    {
      if (dataEventsList.message.success)
        return (
          <CalendarEvent dataEventsList = {dataEventsList.data.promotionsByIDStoreViewModel}/>
        )
      else {
        alert (dataEventsList.message.error)
        return 
           <p>No Data</p>
        }
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

// const mapDispatchToProps = (dispatch, props) => {
//   return {
//       onGetEventsList:  (id) => {
//           dispatch (actHandleGetEventsList(id))
//       }
//   }
// }
export default connect (mapStyleToProps,null) (CalendarEventCTT)
