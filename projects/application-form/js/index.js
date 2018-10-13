(function() {
    // 1. 定义变量
    var infoObj = {
        name: "", // 姓名
        tel: 0, // 电话
        email: "", // 邮箱
        major: "", // 专业
        type: "海报", // 参赛类型
        way: "个人", // 参赛方式
        introduction: "", // 项目简介
        members: [] // 成员
    };
    var times = 0;
    // 2. 获取元素
    var submitBtn    = document.getElementById("submit-btn");
    var membersWrap  = document.getElementById('members');
    var addBtn       = document.getElementById('add-btn');
    var name         = document.getElementById('name');
    var email        = document.getElementById('email');
    var major        = document.getElementById('major');
    var tel          = document.getElementById('tel');
    var introduction = document.getElementById('introduction');
    var memberName   = document.getElementById('member-name');
    var memberTel    = document.getElementById('member-tel');
    var memberList   = document.getElementById('member-list');
    var typeBtns     = document.getElementsByClassName('type-btn');
    var wayBtns      = document.getElementsByClassName('way-btn');
    var validations  = document.getElementsByClassName('validation'); 


    // 3. 事件添加
    // 3.1 提交
    addEvent(submitBtn, "click", function() {
        // 判断是否重复提交
        if(times == 1) {
            new LHYAlertView({
                type: "alert",
                message: "您已提交报名信息，请勿重复提交！"
            })
            return;
        }
        // 异常处理
        if(!name.value || !email.value || !tel.value || !introduction.value || !major.value) {
            new LHYAlertView({
                type: "alert",
                message: "请完善报名信息！"
            })
            return;
        }
        // 完善组员信息
        if(infoObj.way === "团队" && infoObj.members.length == 0) {
            new LHYAlertView({
                type: "alert",
                message: "请填写组员信息！"
            })
            return;
        }
        // 验证是否通过
        var isThough = true;
        for(var i = 0, len = validations.length; i < len; i++) {
            if(validations[i].classList.contains('show')) {
                isThough = false;
                break;
            }
        }
        if(!isThough) {
            new LHYAlertView({
                type: "alert",
                message: "请根据格式填写报名信息！"
            })
            return;
        }
        new LHYAlertView({
            type: "confirm",
            message: "报名表提交之后不可再次提交，您确认要提交么？",
            sureCallBack: function() {
                // 完善信息
                infoObj.name = name.value;
                infoObj.tel  = tel.value;
                infoObj.major = major.value;
                infoObj.email = email.value;
                infoObj.introduction = introduction.value;
                times = 1;
                alert(JSON.stringify(infoObj));
            },
            cancleCallBack: function() {
                console.log("取消提交！");
            }
        })
    });

    // 3.2 类型
    for(var i = 0, len = typeBtns.length; i < len; i++) {
        addEvent(typeBtns[i], "click", function(event) {
            infoObj.type = this.textContent;
            for(var j = 0; j < typeBtns.length; j++) {
                typeBtns[j].classList.remove('selected');
            }
            this.classList.add('selected');
        })
    }
    // 3.3 方式
    for(var i = 0, len = wayBtns.length; i < len; i++) {
        addEvent(wayBtns[i], "click", function(event) {
            if(infoObj.type !== "网页" && this.textContent === "团队") {
                new LHYAlertView({
                    type: "alert",
                    message: "只有网页才能选择团队形式报名！"
                })
                return;
            }
            infoObj.way = this.textContent;
            for(var j = 0; j < wayBtns.length; j++) {
                wayBtns[j].classList.remove('selected');
            }
            this.classList.add('selected');
            if(infoObj.type === "网页" && infoObj.way === "团队") {
                membersWrap.classList.add("show");
            }else {
                membersWrap.classList.remove("show");
            }
        });
    }
    // 3.4 添加成员
    addEvent(addBtn, "click", function() {
        if(!memberName.value || !memberTel.value) {
            new LHYAlertView({
                type: "alert",
                message: "请完善组员信息！"
            })
            return;
        }
        if(infoObj.members.length === 2) {
            new LHYAlertView({
                type: "alert",
                message: "最多添加两名成员！"
            })
            return;
        }
        if(this.textContent === "添加") {
            infoObj.members.push({
                name: memberName.value,
                tel: memberTel.value
            });
            loadingMembers(memberList, infoObj, memberName, memberTel, this);
        }else {
            this.textContent = "添加";
            infoObj.members[this.dataset.index].name = memberName.value;
            infoObj.members[this.dataset.index].tel = memberTel.value;
            console.log(infoObj.members);
            loadingMembers(memberList, infoObj, memberName, memberTel, this);
        }
        memberName.value = "";
        memberTel.value  = "";
    });
    // 3.5 表单验证
    for(var i = 0, len = validations.length; i < len; i++) {
        addEvent(validations[i], "input", function() {
            var isShowValidataion = false;
            switch(this.dataset.tag) {
                case "name" : {
                    if(!/^[\u4E00-\u9FA5]+$/.test(name.value)) {
                        isShowValidataion = true;
                    }
                } break;
                case "tel": {
                    if(!/^1[34578]\d{9}$/.test(tel.value)) {
                        isShowValidataion = true;
                    }
                } break;
                case "email": {
                    if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email.value)) {
                        isShowValidataion = true;
                    }
                } break;
                case "major": {
                    if(!/^[\u4E00-\u9FA5A-Za-z0-9]+$/.test(major.value)) {
                        isShowValidataion = true;
                    }
                } break;
                case "member-name": {
                    if(!/^[\u4E00-\u9FA5]+$/.test(memberName.value)) {
                        isShowValidataion = true;
                    }
                } break;
                case "member-tel": {
                    if(!/^1[34578]\d{9}$/.test(memberTel.value)) {
                        isShowValidataion = true;
                    }
                }
            }
            if(isShowValidataion) {
                this.classList.add("show");
            }else {
                this.classList.remove('show');
            }
        });
    }
   
})();