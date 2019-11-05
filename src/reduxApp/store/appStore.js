import { createStore } from 'redux'
import { ApplicationReducer } from '../reducers/applicationReducer.js'

export const AppStore = createStore(ApplicationReducer);
