var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return /test\.js$/.test(file);
});

//require.config({
//
//    // !! Testacular serves files from '/base'
//    baseUrl: '/base/src',
//    paths: {
//        require: '../test/lib/require',
//        chai : '../test/lib/chai'
//    },
//    shim: {
//        require: { exports: "require" },
//        chai: { exports: "chai" }
//    }
//}, ['videogame.test.js'], function() {
//    window.__karma__.start();
//});

require({
    // Testacular serves files from '/  base'
    baseUrl: '/base/src',
    paths: {
        require: '../lib/require',
        chai : '../lib/chai',
        videogame: '../src/videogame'
    },
    // ask requirejs to load these files (all our tests)
    deps: tests,
    // start test run, once requirejs is done
    callback: window.__karma__.start
});