requirejs(["./app.module", "./app.component"], function (AppModule, AppComponent) {
    AppModule.component("app", AppComponent);

    angular.bootstrap(document.getElementById("app"), ["app"]);
});
