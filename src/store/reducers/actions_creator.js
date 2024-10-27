import * as authActions from "./authReducer/actions";
import * as userActions from "./userReducer/actions";
import * as newsActions from "./newsReducer/actions";
import * as roleActions from "./userReducer/roleActions";

const actions = {
    ...authActions,
    ...userActions,
    ...newsActions,
    ...roleActions
};

export default actions;