define(function () {
    var identity = {};

    const CoursesService = function ($http) {
        return {
            getAll: () => {
                return $http.get("/api/courses");
            },
            add: (course) => {
                return $http.post("/api/courses", course);
            },
            remove: (id) => {
                return $http.delete("/api/courses/" + id);
            },
            getById: (id) => {
                return $http.get("/api/courses/" + id);
            },
            update: (course) => {
                return $http.put("/api/courses", course);
            }
        };
    }

    return ["$http", CoursesService];
});