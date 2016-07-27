define(function () {
    var identity = {};

    const LoginService = function ($http) {
        return {
            login: (login, pass, cb) => {
                return $http.post("/api/login", {login, pass});
            },
            logout: () => {
                return $http.head("/api/logout");
            },
            isLoggined: () => {
                return !!sessionStorage.getItem("identity");
            },
            getUserName: () => {
                return sessionStorage.getItem("identity");
            }
        };
    }

    return ["$http", LoginService];
});