define(function () {
    function LoginController(loginService, $state) {
        this.wrongCredentials = false;
        this.login = () => {
            loginService
                .login(this.username, this.pass)
                .then(
                    () => {
                        $state.go("courses");
                    },
                    () => {
                        this.wrongCredentials = true;
                    });
        }
    }


    return ["LoginService", "$state", LoginController];
});