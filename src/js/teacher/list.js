$.get('/v6/teacher', function (data) {
    var html = template('teacher-list-tpl', data.result);
    $('#table-list-tpl').append(html);
})
//启用或者注销讲师。
$(document).on('click', '#toggle', function () {
    var tc_id = $(this).attr('data-id');
    var tc_status = $(this).attr('data-status');
    var $this = $(this);
    var param = {tc_id: tc_id, tc_status: tc_status};


    $.post('/v6/teacher/handle', param, function (data) {
        console.log(data.result.tc_status);
        if (data.code == 200) {
            $this.text(data.result.tc_status == 0 ? '注销' : '启用');
            $this.attr('data-status', data.result.tc_status )
        }
    })
})
