define([
    "components/fake-server/index",
    "components/courses/index",
    "components/edit-create-course/index",
    "components/login/index",
    "common/header/index",
    "common/footer/index"
],function () {
    const AppComponent = {
        template: `
            <header-courses></header-courses>
            <login></login>
            <courses></courses>
            <edit-create-course></edit-create-course>
            <footer-courses></footer-courses>
          `
    };
    
    return AppComponent;
});