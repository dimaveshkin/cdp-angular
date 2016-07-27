define([
    "module.names",
    "./courses/courses.controller",
    "./courses/courses.service",
    "./edit-create-course/edit-create-course.controller",
    "./login/login.controller",
    "./login/login.service",
    "./fake-server/fake-server.service"
], function (moduleNames, CoursesController, CoursesService, EditCreateCourseController, LoginController, LoginService, FakeServerService) {
    return angular.module(moduleNames.components, [])
        .controller("CoursesController", CoursesController)
        .controller("CourseController", EditCreateCourseController)
        .controller("LoginController", LoginController)
        .factory("LoginService", LoginService)
        .factory("CoursesService", CoursesService)
        .factory("fakeServer", FakeServerService)
        .name;
});