import "../less/jquery.less";

$('.title').text('Hello, jQuery!');

// # jQuery对象与原始DOM对像相互转换
console.log($('.title')[0]);
let title = document.querySelector('.title');
console.log($(title));


// # html
$('.box').html(`<p class='text'>敌军还有5秒到达战场！</p>`);

$('button').click(function() {
    alert($('input').val());
});


let datas = [
    "a", "b", "c"
];

let htmlStr = "";
datas.forEach(item => {
    htmlStr += `<li>${item}</li>`
})
$(".list").html(htmlStr);


