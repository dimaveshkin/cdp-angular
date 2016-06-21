define(["app.module", "./fake-server.service"], function (AppModule, FakeServerService) {
    AppModule.factory("fakeServer", FakeServerService);
});