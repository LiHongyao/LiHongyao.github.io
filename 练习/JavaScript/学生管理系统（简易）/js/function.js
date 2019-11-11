function save(stu, callback) {
    // 定义变量存储学生数据集合
    var stus = null;
    // 判断本地是否已经存在数据集合
    // 如果已经存在，则根据本地数据集合初始化数组
    // 如果不存在，就直接创建一个新的数组
    if(localStorage.stus) {
        // 解析JSON并赋值给status
        stus = JSON.parse(localStorage.stus);
    }else {
        stus = [];
    }
    // 异常处理
    // 判断本地是否已经存在该学生
    for(var i = 0, len = stus.length; i < len; i++) {
        if(stus[i].stunum === stu.stunum) {
            alert("该学生信息已经被录入！");
            return;
        }
    }
    // 录入学生
    stus.push(stu);
    // 将js对象转换为JSON数据
    var jsonObj = JSON.stringify(stus);
    // 存储到本地
    localStorage.stus = jsonObj;
    // 执行回调函数
    callback();
}
function refresh(container) {
   // 判断用户数据是否存在
   if(!localStorage.stus || JSON.parse(localStorage.stus).length === 0) {
       container.innerHTML = "<li class='nodata'>暂无数据，请录入!</li>"
   }else {
       var stus = JSON.parse(localStorage.stus);
       var htmlStr = "<li><span>学号</span><span>姓名</span><span>年龄</span><span>性别</span><span>专业</span></li>";
       stus.forEach(function(stu) {
           htmlStr += `
            <li>
                <span>${stu.stunum}</span>
                <span>${stu.name}</span>
                <span>${stu.age}</span>
                <span>${stu.gender}</span>
                <span>${stu.major}</span>  
            </li>
           `;
       });
       container.innerHTML = htmlStr;
   }
}


