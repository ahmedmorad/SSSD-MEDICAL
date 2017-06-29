export default function (state = {}, action) {
    switch (action.type) {
        case "SELECT_PATIENT":
            {
                state = action.payload;
                break;
            }
        default:
            return state;
    }
    return state;
}