import {combineReducers} from 'redux';
import PatientsReducer from './PatientsReducer';
import ActivePatientReducer from './ActivePatientReducer';

const allReducers = combineReducers({
    patients: PatientsReducer,
    activePatient: ActivePatientReducer
});

export default allReducers;