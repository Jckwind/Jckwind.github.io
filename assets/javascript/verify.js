const searchData = new URLSearchParams(window.location.search);
const token = searchData.get('token');
if (token) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://dev.cordia.app/v1/user/verify", true);
    xhttp.setRequestHeader("Token", token);
    xhttp.send();
}
