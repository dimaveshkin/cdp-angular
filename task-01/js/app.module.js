define([
    "components/components.module",
    "common/common.module",
    "module.names"
], function (ComponentsModule, CommonModule, moduleNames) {
    return angular.module(moduleNames.app, [ComponentsModule, CommonModule, "ngMockE2E", "ui.router"]).name;
});