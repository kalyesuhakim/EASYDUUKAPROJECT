import {
  ADD_ALERT_NOTIFICATION,
  REMOVE_ALERT_NOTIFICATION,
} from "../actions/alertNotifsActionTypes";

const initialState = {
  alertNotifs: [
    
  ],
};

export const notificationsReducer = (MAIN_THREAD = null) => (
  state = initialState,
  action
) => {
  let _state = { ...state };
  _state["change-thread" + action.type] =
    action.type + JSON.stringify(action.notification) + state.alertNotifs.length;

  switch (action.type) {

    // add an alert notification to the application
    case ADD_ALERT_NOTIFICATION:
      var alertNotifsList = state.alertNotifs;
      alertNotifsList.push(action.notification);
      return { ..._state, alertNotifs: alertNotifsList };
    
    /**
     * Remove the alert notification from the state
     * the exact object in the array is passed as the action 
     */
      case REMOVE_ALERT_NOTIFICATION:
      var reduced = [];
      state.alertNotifs.map((oldNotif) => {
        return JSON.stringify(oldNotif) === JSON.stringify(action.notification)
          ? null
          : reduced.push(oldNotif);
      });

      return { ..._state, alertNotifs: reduced };
    default:
      return state;
  }
};
