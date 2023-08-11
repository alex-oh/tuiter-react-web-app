import {configureStore} from "@reduxjs/toolkit"
import todosReducer from "../labs/a4/redux-examples/reducers/todos-reducer"
import userReducer from "../labs/a5/users/user-reducer";

const store = configureStore({
    reducer: {todosReducer, user: userReducer}
})

export default store;