import * as constants from './actionCreators';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    all_budgets_list: [],
    all_budgets_dropdown_list: [],
    budget_number_chosen: '', budget_name_chosen: '',
    unit: [],
    subunit: [],
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_ALL_UNITS:
            return state.set('unit', action.data);
        case constants.GET_SUBUNITS:
            return state.set('subunit', action.data);
        case constants.GET_ALL_BUDGETS_LIST:
            return state.set('all_budgets_list', action.data);
        case constants.GET_ALL_BUDGETS_DROPDOWN_LIST:
            return state.set('all_budgets_dropdown_list', action.data);
        case constants.READ_BUDGET_NUMBER:
            return state.set('budget_number_chosen', action.data);
        case constants.READ_BUDGET_NAME:
            return state.set('budget_name_chosen', action.data);
        case constants.INPUT_BUDGET:
            return state.merge({
                budget_number_chosen: action.budget_number,
                budget_name_chosen: action.budget_name,
            });
        case constants.CLEAR_INPUT:
            return state.merge({
                budget_number_chosen: '',
                budget_name_chosen: '',
            });
        case constants.INSERT_BUDGET_LIST:
            return state.update('all_budgets_list', arr => arr.push(action.data));
        case constants.INSERT_BUDGET_LIST_JS:
            return state.update('all_budgets_dropdown_list', arr => arr.push(action.data));
        case constants.REMOVE_BUDGET_LIST:
            return state.update('all_budgets_list', arr => arr.filter(data => data.get('budget_number') !== action.budget_number));
        case constants.REMOVE_BUDGET_LIST_JS:
            return state.update('all_budgets_dropdown_list', arr => arr.filter(data => data.get('key') !== action.budget));
        case constants.CHANGE_TO_LOGOUT:
            return state.merge(fromJS({
                all_budgets_list: [],
                all_budgets_dropdown_list: [],
                budget_number_chosen: '', budget_name_chosen: '',
                unit: [],
                subunit: [],
            }));
        default:
            return state;
    }
}

export default reducer;