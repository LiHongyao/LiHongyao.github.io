(function() {
    // 获取DOM元素
    var stuNumInput  = document.querySelector('.stu-num'),
        stuNameInput = document.querySelector('.stu-name'),
        stuAgeInput  = document.querySelector('.stu-age'),
        stuMajorSel  = document.querySelector('.sel-major'),
        stuGenderSel = document.querySelector('.sel-gender'),
        enterBtn     = document.querySelector('.enter-btn'),
        oUl          = document.querySelector('.stu-list');
    enterBtn.onclick = function() {
        // 异常处理
        var stunum = stuNumInput.value;
        var name   = stuNameInput.value;
        var age    = stuAgeInput.value;
        var major  = stuMajorSel.options[stuMajorSel.selectedIndex].textContent;
        var gender = stuGenderSel.options[stuGenderSel.selectedIndex].textContent;

        var error = !stunum || !name || !age  || major === "- 请选择专业 -" || gender === "- 请选择性别 -";
        if(error) {
            alert('请完善用户信息!');
            return;
        }
        // 判断学号是否异常（3）
        if(stunum.length !== 4) {
            alert("请输入正确的学号（4为数字）!");
            return;
        }
        stunum = "S" + stunum;

        // 创建学生对象
        var stu = {
            stunum,
            name,
            age,
            gender,
            major
        }
        // 存入本地数据集合中
        save(stu, function(){
            refresh(oUl);
        });
    }
    // 显示默认数据
    refresh(oUl);
})();