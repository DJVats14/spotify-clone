//redirect to spotify when login button is clicked
export const authEndpoint = "https://accounts.spotify.com/authorize";

//redirected to localhost
const redirectUri = "http://localhost:3000/";

const clientId = "5098bb75e8d54549b137cd25b9dbaf95";

//what user can do with spotify i.e. available permissions
const scopes = [
    "user-top-read",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;