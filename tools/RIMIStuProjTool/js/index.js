

$(function(){

    // 获取DOM元素
    let $stuName    = $("#stu-name"),
        $projName   = $("#proj-name"),
        $projLink   = $("#proj-link"),
        $projDes    = $("#proj-des"),
        $projModule = $("#proj-module"),
        $projSkill  = $("#proj-skill"),
        $submitBtn  = $(".submit-btn");
    // 注册Bmob服务
    Bmob.initialize("3f3fdef107936d72417088cafa684a06", "45e33924eb1a917394e1acb44a173716");

    $submitBtn.on("click", () => {
        // 异常处理
        let isThough = true;
        $(".form-item:not(.no-validate)").each((index, el) => {
           if(!$(el).val()) {
               isThough = false;
               return false;
           }
        });
        if(!isThough) {
            new LHYAlertView({
                type: "alert",
                message: "请完善项目方案！"
            })
        }else {
            // 将数据上传至服务器
            // 创建类
            let ClassName = Bmob.Object.extend("W1802");
            let student = new ClassName();
            // 设置属性
            student.set("stuName", $stuName.val());
            student.set("projName", $projName.val());
            student.set("projLink", $projLink.val());
            student.set("projDes", $projDes.val());
            student.set("projModule", $projModule.val());
            student.set("projSkill", $projSkill.val());
            // 上传
            student.save(null, {
                success: (student) => {
                    new LHYAlertView({
                        type: "alert",
                        message: "项目方案提交成功，请耐心等待耀哥审核！"
                    })
                },
                error: (student, error) => {
                   if(error.code == 401) {
                        new LHYAlertView({
                            type: "alert",
                            message: "您已经提交项目方案，不能再更改，如需更改，请与耀哥联系！联系电话：15228885771."
                        })
                   }
                    
                }
            });
        }
    });  
});
