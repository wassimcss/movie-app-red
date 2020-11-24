import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, GET_KEYWORD, GET_RATING } from "./Types";

export const addMovie = (item) => ({
    type: ADD_MOVIE,
    payload : item
})

export const deleteMovie = (id) => ({
    type: DELETE_MOVIE,
    payload : id
})

export const editMovie = (id,value) => ({
    type: EDIT_MOVIE,
    payload : {id,value}
})

export const getKeyword = (word) => ({
    type: GET_KEYWORD,
    payload :word
})
export const getRating = (rating) => ({
    type: GET_RATING,
    payload :rating
})

