export const selectPatient = (patient)=>{
    return {
        type: 'SELECT_PATIENT',
        payload: patient
    }
}