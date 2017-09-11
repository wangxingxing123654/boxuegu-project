$.get('/v6/category',function (data) {
    console.log(template('category_list', data.result));
    $('.table-bordered').append(template('category_list',data.result));
})

