import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const signInByToken = (token) => async (dispatch) => {
    const user = saveToken(token);

    dispatch({ type: "SIGN_IN", payload: user });
};

const saveToken = (token) => {
    localStorage.setItem("auth", token);
    const decodedToken = jwtDecode(token);

    const user = {
        id: decodedToken.id,
        email: decodedToken.email,
    };

    return user;
}

export const signIn = (model) => async (dispatch) => {
    try {
        const response = await axios.post(
            "https://localhost:5000/api/account/signin",
            model
        );
        const { data } = response;
        const token = data.payload;
        const user = saveToken(token);

        dispatch({ type: "SIGN_IN", payload: user });

        return { success: true, message: data.message };
    } catch (error) {
        return { success: false, message: error.response.data.message };
    }
};
