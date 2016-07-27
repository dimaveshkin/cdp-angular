define(function () {
    function FakeServerService($injector) {
        var $httpBackend = $injector.get("$httpBackend");

        var courses = [
            {
                "description": "Consectetur ipsum sunt. Aliquip consectetur consequat et minim sunt aliquip sint consectetur. Enim tempor id est ipsum incididunt consectetur ipsum sunt",
                "authors": [
                    "Rich Raymond",
                    "Pauline Lyons",
                    "Stuart Barlow"
                ],
                "duration": 98,
                "date": 943938879768,
                "title": "First day",
                "id": 0
            },
            {
                "description": "Sint culpa ex voluptate anim amet deserunt. Ut excepteur eu commodo veniam mollit aliquip sint consectetur. Enim tempor id est ipsum incididunt consectetur ipsum sunt",
                "authors": [
                    "Sally Lamb"
                ],
                "duration": 101,
                "date": 1244368734294,
                "title": "Second day",
                "id": 1
            },
            {
                "description": "Sint culpa ex voluptate anim amet deserunt. Ut excepteur eu commodo veniam mollit aliquip sint consectetur. Enim tempor id est ipsum incididunt consectetur ipsum sunt. Aliquip consectetur consequat et minim sunt pariatur minim pariatur. Ex id et duis duis incididunt non Lorem laboris nostrud dolor elit deserunt laborum voluptate. Irure laborum consequat consectetur magna laboris culpa fugiat.",
                "authors": [
                    "Bean Roman",
                    "Wendi Rowland",
                    "Tommie Forbes"
                ],
                "duration": 98,
                "date": 1400752873,
                "title": "Third Day",
                "id": 2
            },
            {
                "description": "Nulla nulla id ex culpa commodo fugiat mollit. Pariatur anim anim adipisicing eu esse cillum commodo ut esse esse labore esse fugiat. Sint dolore qui consectetur culpa proident enim consequat excepteur. Ipsum ad eiusmod occaecat adipisicing pariatur non voluptate excepteur commodo excepteur. Enim qui magna velit irure tempor. Cillum dolore velit nisi aute officia eu Lorem dolor aliqua.",
                "authors": [
                    "Forbes Mcgowan",
                    "Berger West"
                ],
                "duration": 127,
                "date": 695924376424,
                "title": "Forth Day",
                "id": 3
            },
            {
                "description": "Cupidatat labore ea minim cupidatat in minim commodo deserunt aliquip exercitation reprehenderit et id. Laboris officia excepteur minim cupidatat elit. Amet proident dolore proident irure do aliqua velit ea nostrud excepteur veniam.",
                "authors": [
                    "Snider Mack"
                ],
                "duration": 124,
                "date": 634788759391,
                "title": "Deus ex machina",
                "id": 4
            },
            {
                "description": "Irure fugiat officia proident cillum in sit tempor eu ut non do. Cupidatat incididunt qui tempor sit nostrud sit. Proident non labore duis quis et Lorem ipsum sit magna irure deserunt magna. Sit fugiat mollit laborum est Lorem sint culpa nulla ad commodo aute excepteur. Duis sunt labore nisi magna laboris id nostrud sit ex amet ea laborum ullamco.",
                "authors": [
                    "Suzette Hudson"
                ],
                "duration": 168,
                "date": 1132639866611,
                "title": "The day after Tomorrow",
                "id": 5
            },
            {
                "description": "Consectetur ipsum culpa consequat eu ipsum elit pariatur enim adipisicing dolore irure. Laboris sunt pariatur mollit fugiat aute commodo. Ea proident occaecat irure sit sint. Pariatur veniam irure ullamco consectetur nostrud voluptate ea sit. Aliqua esse veniam dolor aute est ea. Ad occaecat voluptate magna laborum qui tempor. Aliqua ullamco dolore voluptate duis.",
                "authors": [
                    "Sherri Savage",
                    "Buck Hernandez"
                ],
                "duration": 174,
                "date": 1123246367363,
                "title": "eWars",
                "id": 6
            },
            {
                "description": "Sit deserunt magna veniam laboris. Ea nisi adipisicing excepteur culpa. Tempor duis irure velit enim ex.",
                "authors": [
                    "Tanisha Stephenson",
                    "Richmond Doyle"
                ],
                "duration": 104,
                "date": 589461629597,
                "title": "The day when task was done",
                "id": 7
            },
            {
                "description": "Occaecat irure cillum cupidatat enim ipsum culpa et laboris. Deserunt irure consectetur id consequat culpa non eiusmod deserunt duis sunt cillum duis fugiat. Sunt in est quis magna enim enim est ad commodo reprehenderit id amet id qui. Consectetur officia ex dolore mollit cillum. Voluptate sunt exercitation consequat ut. Laboris aliquip fugiat ullamco exercitation irure irure id proident labore.",
                "authors": [
                    "Jenny Herman",
                    "Manuela Daugherty"
                ],
                "duration": 124,
                "date": 302876518911,
                "title": "Carate-kid ext",
                "id": 8
            },
            {
                "description": "Anim occaecat Lorem nostrud Lorem consectetur adipisicing voluptate aliqua pariatur. Proident consectetur nulla et nulla magna eiusmod et tempor dolore ut veniam. Veniam proident tempor dolore eiusmod veniam proident adipisicing enim incididunt consectetur dolor Lorem. Ipsum occaecat ea eiusmod consectetur enim proident anim. Proident laborum mollit laboris laborum.",
                "authors": [
                    "Hensley Stanley"
                ],
                "duration": 115,
                "date": 16434436572,
                "title": "The day when JS was born",
                "id": 9
            },
            {
                "description": "Elit culpa dolore Lorem aliqua non sunt eu magna in dolor irure. Tempor aliqua dolor et nisi ea ex dolor elit excepteur consectetur ad. Sunt amet ea laboris velit fugiat est velit fugiat anim commodo sunt amet anim quis. Pariatur sint ut consequat veniam veniam pariatur ipsum nostrud laboris magna pariatur aliqua sint velit. Adipisicing enim culpa deserunt ad. Magna elit voluptate fugiat voluptate ea aliquip elit laboris. Duis cupidatat voluptate incididunt non duis ad et velit sunt minim cupidatat incididunt.",
                "authors": [
                    "Glover Johns",
                    "Bridget Pugh",
                    "Bush Mcpherson"
                ],
                "duration": 59,
                "date": 891775782826,
                "title": "DB in real world",
                "id": 10
            },
            {
                "description": "Officia magna laboris do reprehenderit sunt commodo aliquip. Officia laborum elit duis nostrud et duis sunt. Incididunt dolor esse ullamco dolor ullamco.",
                "authors": [
                    "Robertson Fitzpatrick",
                    "Bell Lowe"
                ],
                "duration": 119,
                "date": 98772996333,
                "title": "WAT?",
                "id": 11
            },
            {
                "description": "Exercitation velit id anim proident. Voluptate exercitation consectetur deserunt eiusmod est ea eu eiusmod adipisicing reprehenderit. Velit voluptate sunt aliqua in exercitation et tempor excepteur laborum. In commodo ullamco commodo in esse ex et incididunt aute.",
                "authors": [
                    "Torres Nichols",
                    "Rowena Bowman",
                    "Potter Luna"
                ],
                "duration": 61,
                "date": 59391192557,
                "title": "Nothing special (2 edition)",
                "id": 12
            },
            {
                "description": "Ex non non dolor elit officia sit incididunt ut excepteur. Aliquip tempor quis id velit dolor sit deserunt duis nostrud incididunt cupidatat Lorem cillum duis. Elit nostrud excepteur amet do sit.",
                "authors": [
                    "Torres Nichols",
                    "Rowena Bowman",
                    "Potter Luna"
                ],
                "duration": 79,
                "date": 432593531529,
                "title": "Nothing special (1 edition)",
                "id": 13
            }
        ];

        return {
            run: function () {
                $httpBackend.whenGET(/.*\.html/).passThrough();

                $httpBackend.whenGET("/api/courses").respond(
                    function (method, url, data, headers, params) {
                        return [200, courses];
                    });

                $httpBackend.when("GET", /\/api\/courses\/(.+)/, undefined, undefined, ["id"]).respond(
                    function (method, url, data, headers, params) {
                        var course = courses.filter(course => course.id === parseInt(params.id, 10));
                        return [200, course[0]];
                    });

                $httpBackend.whenPOST("/api/login").respond(
                    function (method, url, data, headers, params) {
                        var response;
                        data = JSON.parse(data);
                        if (data.pass === "test" && data.login === "test") {
                            sessionStorage.setItem("identity", "test");
                            response = 200;
                        } else {
                            response = 500;
                        }

                        return [response, {}];
                    });

                $httpBackend.whenHEAD("/api/logout").respond(
                    function (method, url, data, headers, params) {
                        sessionStorage.removeItem("identity");
                        return [200, {}];
                    });

                $httpBackend.when("DELETE", /\/api\/courses\/(.+)/, undefined, undefined, ["id"]).respond(
                    function (method, url, data, headers, params) {
                        courses.splice(courses.findIndex(course => course.id === parseInt(params.id, 10)), 1);
                        return [200, courses];
                    });

                $httpBackend.whenPUT(/\/api\/courses/).respond(
                    function (method, url, data, headers, params) {
                        data = JSON.parse(data);
                        courses.splice(courses.findIndex(course => course.id === parseInt(data.id, 10)), 1);
                        courses.push(data);
                        return [200, courses];
                    });

                $httpBackend.whenPOST(/\/api\/courses/).respond(
                    function (method, url, data, headers, params) {
                        data = JSON.parse(data);
                        data.id = courses.length;
                        courses.push(data);
                        return [200, courses];
                    });
            }
        };
    }

    return ["$injector", FakeServerService]
});