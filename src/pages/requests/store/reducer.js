import * as constants from './actionCreators';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    requests: [],
    detailRequest: [],
    budget_list: [],
    showDetail: false,
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_USER_REQUESTS:
            return state.set('requests', action.data);
        case constants.CHANGE_TO_LOGOUT:
            return state.merge(fromJS({
                requests: [],
                detailRequest: [],
                budget_list: [],
                showDetail: false
            }));
        case constants.BACK_TO_REQUESTS:
            return state.merge(fromJS({
                detailRequest: [],
                budget_list: [],
                showDetail: false
            }));
        case constants.SET_REQUEST_DETAIL:
            return state.merge({
                detailRequest: action.data,
                showDetail: true
            });
        case constants.SET_BUDGET_DETAIL:
            return state.set('budget_list', action.data);
        default:
            return state;
    }
}

export default reducer;