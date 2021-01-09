const user = {
    fetching: false,
    isSignedUp: false,
    email: localStorage.getItem("email"),
    isLoggedIn: !!localStorage.getItem('email'),
    isGetUserFetched: false,
    firstName: "",
    lastName: "",
    id: "",
    error: false,
    errorTitle: "",
    errorText: ""
};

export default user;