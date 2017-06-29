import {combineReducers} from 'redux';
import CheckupsReducer from './reducer_checkup';
import ActiveCheckup from './reducer_active_checkup';

const allReducers = combineReducers({
    checkups: CheckupsReducer,
    activeCheckup: ActiveCheckup
});

export default allReducers;