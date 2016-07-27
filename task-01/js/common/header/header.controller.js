define(function () {
    function HeaderController(loginService, $state, $stateParams) {
        this.loggined = loginService.isLoggined();

        if(this.loggined) {
            this.username = loginService.getUserName();
        }

        this.courseTitle = $stateParams.title;

        this.logout = ($event) => {
            $event.preventDefault();

            loginService.logout().then(() => {
                $state.go("login");
            });
        }

        this.goToCourses = () => {
            $state.go('courses');
        }
    }

    return ["LoginService", "$state", "$stateParams", HeaderController];
});