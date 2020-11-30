import { connect } from "react-redux"

const { addAlertNotifAction, removeAlertNotifAction } = require("../actions/alertNotifsActions")

const mapNotificationsToState = (state, ownProps) => ({
    ...state.notifications,
    ...ownProps,
})

const mapNotificationsToDispatch = (dispatch, ownProps) => ({
    addAlertNotification: (notification) => dispatch(addAlertNotifAction(notification)),
    removeAlertNotification: (notification) => dispatch(removeAlertNotifAction(notification)),
})


const notificationService = connect(mapNotificationsToState, mapNotificationsToDispatch);
export default  notificationService
