import { USER_LOGIN, USER_LOGOUT } from "../actions/userAction";

const INITIAL_STATE = {
  user: "",
};

const reducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case USER_LOGIN:
      return {};

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export default reducer;
