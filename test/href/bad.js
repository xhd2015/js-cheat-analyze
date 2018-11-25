

// 梳理出所有的类型： ajax跳转，
// 赋值形式
let s = 'cityString'
if(s.indexOf('深圳')>0 || s.indexOf('北京')>0){
    $.ajax({
        url:'/getCityUrl',
        data:{city:s},
        success:function(resp){
            window.location.href = resp
        }
    })
}