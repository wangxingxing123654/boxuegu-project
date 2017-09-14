$('#course-add').ajaxForm(function (data) {

    location.href='/dist/html/course/edit1.html?cs_id='+data.result.cs_id;
});