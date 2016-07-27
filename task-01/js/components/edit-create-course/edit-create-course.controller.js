define(function () {
    function CourseController(coursesService, loginService, $state, $stateParams) {
        if (!loginService.isLoggined()) {
            $state.go("login");
            return;
        }

        var course = {
            authors: []
        };

        var mode;
        var promise;
        var selectedAuthor;

        if ($stateParams.id) {
            mode = "edit";
            coursesService
                .getById($stateParams.id)
                .then((response) => {
                    course = response.data;

                    if(!response.data || !response.data.id) {
                        this.setCreateMode();
                    } else {
                        this.title = course.title;
                        this.duration = course.duration;
                        this.date = new Date(course.date);
                        this.authors = course.authors;
                        this.description = course.description;
                    }
                });
        } else {
            this.setCreateMode();
        }

        this.addAuthor = ($event) => {
            if (this.newAuthor) {
                this.authors.push(this.newAuthor);
                this.newAuthor = "";
            }

            $event.preventDefault();
        };

        this.removeAuthor = ($event) => {
            if (selectedAuthor) {
                this.authors.splice(this.authors.findIndex(author => author === selectedAuthor), 1)
            }

            $event.preventDefault();
        };

        this.selectAuthor = (author) => {
            selectedAuthor = author;
        };

        this.submit = () => {
            course.date = this.date.getTime();
            course.title = this.title;
            course.description = this.description;
            course.authors = this.authors;
            course.duration = this.duration;

            if (mode === "edit") {
                promise = coursesService.update(course);
            } else {
                promise = coursesService.add(course);
            }

            promise.then(() => {
                $state.go("courses");
            })
        };

        this.cancel = () => {
            $state.go("courses");
        }

        this.setCreateMode = () => {
            mode = "create";
            this.date = new Date();
            this.authors = course.authors;
        }
    }


    return ["CoursesService", "LoginService", "$state", "$stateParams", CourseController];
});