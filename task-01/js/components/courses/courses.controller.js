define(function () {
    function CoursesController(coursesService, $state, loginService) {
        if (!loginService.isLoggined()) {
            $state.go("login");
            return;
        }

        coursesService
            .getAll()
            .then((response) => {
                this.courses = response.data;
            });

        this.query = "";

        this.deleteCourse = (id) => {
            coursesService
                .remove(id)
                .then(response => {
                    this.courses = response.data;
                });
        }

    }

    return ["CoursesService", "$state", "LoginService", CoursesController];
});