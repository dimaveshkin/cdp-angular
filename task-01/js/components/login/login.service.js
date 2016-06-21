define(function () {
    const LoginService = function ($http) {
        return {
            login: (username, pass, cb) => {
                return 42;
            },
            logout: () => {
                return -42;
            },
            isLoggined: () => {
                return false
            }
        };
    }

    return ["$http", LoginService];
});