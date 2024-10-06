import * as authActions from "./authReducer/actions";
import * as userActions from "./userReducer/actions";
import * as newsActions from "./newsReducer/actions";

const actions = {
    ...authActions,
    ...userActions,
    ...newsActions
};

export default actions;