var gulp = require('gulg');

gulp.task('travis', ['build', 'testServerJS'],
  function() {
    process.exit(0);
  });
