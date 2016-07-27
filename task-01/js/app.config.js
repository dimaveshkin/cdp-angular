define([
    "app.module"
], function (AppModule) {
    angular
        .module(AppModule)
        .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('login', {
                    url: "/login",
                    views: {
                        'main': {
                            templateUrl: "js/components/login/login.tpl.html",
                            controller: "LoginController",
                            controllerAs: "login"
                        },
                        'header': {
                            templateUrl: "js/common/header/header.tpl.html",
                            controller: "HeaderController",
                            controllerAs: "header"
                        }
                    }
                })
                .state('courses', {
                    url: "/courses",
                    views: {
                        'main': {
                            templateUrl: "js/components/courses/courses.tpl.html",
                            controller: "CoursesController",
                            controllerAs: "coursesCtrl"
                        },
                        'header': {
                            templateUrl: "js/common/header/header.tpl.html",
                            controller: "HeaderController",
                            controllerAs: "header"
                        }
                    }
                })
                .state('addCourse', {
                    url: "/course/new",
                    params: {
                        title: "Новый курс"
                    },
                    views: {
                        'main': {
                            templateUrl: "js/components/edit-create-course/course.tpl.html",
                            controller: "CourseController",
                            controllerAs: "course"
                        },
                        'header': {
                            templateUrl: "js/common/header/header.tpl.html",
                            controller: "HeaderController",
                            controllerAs: "header"
                        }
                    }
                })
                .state('editCourse', {
                    url: "/course/{id}",
                    params: {
                        title: null
                    },
                    views: {
                        'main': {
                            templateUrl: "js/components/edit-create-course/course.tpl.html",
                            controller: "CourseController",
                            controllerAs: "course"
                        },
                        'header': {
                            templateUrl: "js/common/header/header.tpl.html",
                            controller: "HeaderController",
                            controllerAs: "header"
                        }
                    }
                });

            $urlRouterProvider.otherwise('/courses');
        }])
        .run(['fakeServer', function (fakeServer) {
            fakeServer.run();
        }]);
});