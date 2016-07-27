define([
    "module.names",
    "./header/header.controller",
    "./filters/time",
    "./footer/footer.component"
], function (moduleNames, HeaderController, time, FooterComponent) {
    return angular.module(moduleNames.common, [])
        .controller("HeaderController", HeaderController)
        .component("footerCourses", FooterComponent)
        .filter("time", time)
        .name;
});