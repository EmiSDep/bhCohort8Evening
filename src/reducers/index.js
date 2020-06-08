import {combineReducers} from 'redux';
import resourcesReducer from './resourcesReducer';
import newResourceReducer from './newResourceReducer'
import searchReducer from './searchReducer'

export default combineReducers({
    resources: resourcesReducer,
    newResource: newResourceReducer,
    search: searchReducer
})

const store = {
    resources: {
        list: [],
        loading: true,
        errors: {},
        count: 0
    },
    newResource: {
        form: {
        },
        loading: false,
        errors: {},
    },
    search: {
        list: [],
        query: '',
        loading: false,
        errors: {}
    }
}