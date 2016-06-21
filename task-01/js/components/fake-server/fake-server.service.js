define(function () {
    function FakeServerService($injector) {
        var $httpBackend = $injector.get("$httpBackend");

        $httpBackend.whenPOST("/login").respond(function (method, url, data, headers, params) {
            return 42;
        });

        $httpBackend.whenHEAD("/logout").respond(function (method, url, data, headers, params) {
            return -42;
        });
    }

    return ["$injector", FakeServerService]
});