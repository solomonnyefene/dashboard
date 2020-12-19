
import isEmpty from 'lodash/isEmpty';
import mapKeys from 'lodash/mapKeys';
import moment from 'moment'
import omit from 'lodash/omit'
import valuesIn from 'lodash/valuesIn';

// import * as actionType from './../../Actions/comments/commentTypes';
import typeToReducer from 'type-to-reducer';



const INITIAL_STATE = {
    is_opened_side_bar:false,
    active_tab: null
}

const main = typeToReducer({


    ['TOGGLE_SIDE_BAR']: (state, action) => ({
        ...state,
        is_opened_side_bar: !state.is_opened_side_bar,
    }),

    ['TOGGLE_TAB']: (state, action) => ({
        ...state,
        active_tab:action.payload
    }),

   ['SET_ACTIVE_TAB']: (state, action) => ({
        ...state,
        active_tab: state.active_tab === null? 'General' : state.active_tab
    }),


    ['UPDATE_LOG']: {
        PENDING: state => ({
            ...state,
            isUpdatingLog: true
        }),
        FULFILLED: (state, action) => {
            let logs = state.logs,
                updatedLog = action.payload.log;
            const updatedLogs = valuesIn(logs).map(log=> {
                if (log.id === updatedLog.id) {
                    return (log = updatedLog);
                } else {
                    return log;
                }
            });
            return {
                ...state,
                errors: {},
                logs: { ...updatedLogs },
                isShowUpdateLogModal:false,
                isUpdatedEquipment: true,
                isUpdatingLog: false,
                isUpdatedLog: true,
            };
        },
        REJECTED: (state, action) => ({
            ...state,
            errors: {
                ...action.payload.errors
            },
            isUpdatingLog: false,
            isUpdatedLog: true
        })
    },

    ['GET_LOGS']: {
        PENDING: state => ({
            ...state,
            ...state.posts,
            isFetchingLogs:true

        }),
        FULFILLED: (state, action) => ({
            ...state,
            ...state.logs,
            logs: {
                ...action.payload.logs
            },
            isFetchingLogs:false,
            isFetchedLogs:true

        }),

        REJECTED: (state, action) => ({
            ...state,
            ...state.posts,
            hasError: action.error,
            isFetchingLogs:false,
            isFetchedLogs:false

        })
    },


    ['DELETE_LOG']: {
        PENDING: (state, action) => ({
            ...state,
            ...state.logs,
            isDeletingLog: true
        }),
        FULFILLED: (state, action) => {
            let logs = mapKeys(state.logs, 'id'),
                id = action.payload.log.id,
                remainingLogs = omit(logs, [id]);
            return {
                ...state,
                errors: {},
                logs: {
                    ...remainingLogs
                },
                isDeletedLog: true,
                isDeletingLog: false

            };
        },
        REJECTED: (state, action) => {
            let errors = action.payload;
            return {
                ...state,
                errors: errors,
                isDeletingLog: false,
                isDeletedLog: false
            };
        }
    },

    ['NEW_LOG']: {
        PENDING: state => ({
            ...state,
            isCreatingNewLog: true,
            isCreatedNewLog: false
        }),
        FULFILLED: (state, action) => {
            let newIndex = valuesIn(state.logs).length + 1 - 1,
                logs = {...state.logs, [newIndex]: action.payload.log}
            return {
                ...state,
                logs: {...logs},
                isCreatingNewLog: false,
                isCreatedNewLog: true,
                isShowNewLogForm:false

            };
        },
        REJECTED: (state, action) => {
            let errors = action.payload;
            return {
                ...state,
                errors: errors,
                isCreatingNewLog: false,
                isCreatedNewLog: false
            };
        }
    },




},INITIAL_STATE);

export default main