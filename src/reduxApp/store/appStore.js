import { createStore } 		      from 'redux'
import ApplicationReducer 			from '../reducers/applicationReducer.js'

let AppStore = createStore(ApplicationReducer);
export default AppStore;
