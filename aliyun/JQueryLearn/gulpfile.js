/**
 * Created by billi on 2017/6/29.
 */
var gulp = require('gulp');

gulp.task("test",function(){
    console.log("你好");
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        // configuration
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});