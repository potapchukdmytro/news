import http from "../../../http_common";

export const loadUsers = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("auth");
        if(token == null) {
            return;
        }

        const response = await http.get("user", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });        

        const { data } = response;
        const users = data.payload;
        dispatch({ type: "LOAD_USERS", payload: users });
    } catch (error) {
        console.log("Users error", error);
    }
};
