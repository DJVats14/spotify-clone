export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after developement, change it to null
    //token: 'BQCy3UdE7lIc1BjL8egvYDIVBvAC32kMS3nflrwqnmOvYp-UFOljTD8up2sveIiNua_iKOu5uXF7uqGq2vZ6sAvKqi5FXFdCUZHWdjoeVvLWv8xbpr_uOUboz5kXOWfVj8WSUCQIgAjKtkRZ2_hcUuAuHpdD5qws9eTRpNqiFrJQZ1oO',
}

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
        }
};

export default reducer;



