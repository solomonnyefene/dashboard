import {combineReducers} from 'redux'
import main  from './main_reducer.js'



const reducers = combineReducers({
    main:main,
})

export  {reducers}