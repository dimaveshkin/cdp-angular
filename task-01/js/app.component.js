define(["./components/courses/index", "./components/login/index", "./common/header/index"],function () {
    const AppComponent = {
        template: `
            <header-courses></header-courses>
            <login></login>
            <courses></courses>
          `
    };
    
    return AppComponent;
});