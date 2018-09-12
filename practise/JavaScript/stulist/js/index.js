(function() {
    // 定义数据集合
    var stulist = [
        {stuNum: 1101, name:"露娜", major:"Web前端", gender: "女", age:28},
        {stuNum: 1102, name:"鲁班", major:"iOS", gender: "男", age:19},
        {stuNum: 1103, name:"狄仁杰", major:"Java", gender: "男", age:32},
        {stuNum: 1104, name:"李白", major:"UI", gender: "男", age: 27},
        {stuNum: 1105, name:"兰陵王", major:"新媒体", gender: "女", age: 22}
    ];
    // 获取DOM元素
    
    var stuNumInput  = document.querySelector('.stu-num'),
        stuNameInput = document.querySelector('.stu-name'),
        stuAgeInput  = document.querySelector('.stu-age'),
        stuMajorSel  = document.querySelector('.sel-major'),
        stuGenderSel = document.querySelector('.sel-gender'),
        enterBtn     = document.querySelector('.enter-btn'),
        oUl          = document.querySelector('.stu-list');

        console.log(stulist);
    // 添加点击事件
    enterBtn.onclick = function() {
        // 获取对应数据
        var stuNum = stuNumInput.value,
            name   = stuNameInput.value,
            age    = stuAgeInput.value,
            major  = stuMajorSel.options[stuMajorSel.selectedIndex].textContent,
            gender = stuGenderSel.options[stuGenderSel.selectedIndex].textContent;
        // 异常处理
        if(!stuNum || !name || !age || major === "- 请选择专业 -" || gender === "- 请选择性别 -") {
            alert("请完善学员信息！");
            return;
        }
        // 记录学生对象
        var stu = {
            stuNum,
            name,
            age,
            major,
            gender
        };
        // 将学生对象存入数组中
        stulist.push(stu);
        
        // 根据学生年龄重新排序数组
        stulist = stulist.sort(function(stu1, stu2){
            return stu1.age - stu2.age;
        });
        // 
        updateInfos();
    }

    updateInfos();

    // 更新显示学生信息
    function updateInfos() {
        // 更新页面显示
        var htmlStr = "<li><span>学号</span><span>姓名</span><span>性别</span><span>年龄</span><span>专业</span></li>";
        stulist.forEach(function(stu) {
            htmlStr += "<li>";
            htmlStr += "<span>" + stu.stuNum + "</span>";
            htmlStr += "<span>" + stu.name + "</span>";
            htmlStr += "<span>" + stu.age + "</span>";
            htmlStr += "<span>" + stu.major + "</span>";
            htmlStr += "<span>" + stu.gender + "</span>";
            htmlStr += "</li>";
        });
        oUl.innerHTML = htmlStr;
    }
})();