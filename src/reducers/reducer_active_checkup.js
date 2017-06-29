export default function (state = {}, action) {
    switch (action.type) {
        case "SELECT_CHECKUP":
            {
                state = action.payload;
                break;
            }
        default:
            return state;
    }
    return state;
}