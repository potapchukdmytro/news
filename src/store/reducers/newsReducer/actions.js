import axios from "axios";
import http from "../../../http_common";

export const loadList = () => {
    return async (dispatch) => {
        try {
            dispatch({type: 'START_LOAD', payload: true });
            const resp = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bcb80a2aeaba4b49ad82fed10cd0414c");
            dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
        } catch(error) {
            dispatch({type: 'LOAD_LIST_ERROR', payload: {error: error.message, load: false}});
        }
    };
}

export const loadUkraineList = () => {
    return async (dispatch) => {
        try {
            dispatch({type: 'START_LOAD', payload: true });
            const resp = await axios.get("https://newsapi.org/v2/top-headlines?language=uk&apiKey=bcb80a2aeaba4b49ad82fed10cd0414c");
            dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
        } catch(error) {
            dispatch({type: 'LOAD_LIST_ERROR', payload: {error: error.message, load: false}});
        }
    };
}

export const loadItList = () => {
    return async (dispatch) => {
        try {
            dispatch({type: 'START_LOAD', payload: true });
            const resp = await axios.get("https://newsapi.org/v2/top-headlines?q=it&language=en&apiKey=bcb80a2aeaba4b49ad82fed10cd0414c");
            dispatch({type: 'LOAD_LIST', payload: {list: resp.data.articles, load: false}});
        } catch(error) {
            dispatch({type: 'LOAD_LIST_ERROR', payload: {error: error.message, load: false}});
        }
    };
}