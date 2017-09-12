$.get('/v6/course',function (data) {
    $('.courses').html(template('course-list-tpl',data.result));
})