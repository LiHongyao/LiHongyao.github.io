

;(function () {
    // 变量
    let _model        = new Model(),
        _isEditing    = false,
        _editIdx      = 0,
        _keys         = ["goodsNum", "goodsName", "goodsType", "goodsStock", "goodsPrice", "goodsTips", "updatedTime"],
        _tBody        = $.get("#tBody"),
        _mask         = $.get("#mask"),
        _addBtn       = $.get("#add-btn"),
        _closeBtn     = $.get("#mask-close-btn"),
        _add_edit_btn = $.get("#add-edit-btn"),
        _goodsForm    = $.get("#goodsForm"),
        _goodsIpts    = Array.prototype.slice.call($.get(".goods-input"));

    // 数据加载
    loading(_tBody, _model.get());
    // 点击添加商品按钮
    $.addEvent(_addBtn, "click", function (e) {
        _isEditing = false;
        _add_edit_btn.textContent = "确认添加";
        showMask(_mask)
    });
    // 点击关闭遮罩按钮
    $.addEvent(_closeBtn, "click", function () {
        closeMask(_mask);
        _goodsForm.reset();
    });
    // 点击遮罩层的编辑/添加按钮
    $.addEvent(_add_edit_btn, "click", function () {
        let _date  = new Date(),
            _good  = {};
        // 异常处理
        for(let i = 0, len = _goodsIpts.length - 1; i < len; i++) {
            if(!_goodsIpts[i].value) {
                new LHYAlertView({
                    "type": "alert",
                    "message": "请完善商品信息！"
                });
                return;
            }
        }
        // 赋值商品对象
        _keys.forEach(function (key, index) {
            _good[key] = key == "updatedTime" ? _date.toLocaleString() : _goodsIpts[index].value;
        });

        // 判断当前是编辑状态还是添加状态
        if(_isEditing) {    // 编辑状态
            // 更新数据
            _model.modifyWith(_editIdx, _good);
            // 获取编辑数据项子元素
            let children = _tBody.children[_editIdx].children;
            _keys.forEach(function (key, idx) {
                // 更新页面
                children[++idx].textContent = _good[key];
            });
            new LHYAlertView({
                "type":"alert",
                "message":"编辑成功！"
            });
        }else {        // 添加状态
            // 更新数据
            _model.appendWith(_good);
            // 更新页面
            _tBody.insertAdjacentHTML("beforeend", createHtmls(_good, _model.get().length));
            new LHYAlertView({
                "type":"alert",
                "message":"添加成功！"
            });
        }
        closeMask(_mask);
        _goodsForm.reset();

    });

    $.addEvent(_tBody, "click", function (e) {
        e = e || event;
        let _target = e.target,
            _tarCls = _target.classList,
            _idx    = _target.dataset["idx"];
        if(_tarCls.contains("delete")) {       // 点击删除按钮
            new LHYAlertView({
                "type":"confirm",
                "message":"您确定要删除该项数据吗？",
                "sureCallBack":function () {
                   // 数据删除
                   _model.removeWith(_idx);
                   // 删除子节点
                   _tBody.innerHTML = "";
                   // 重新加载数据
                   loading(_tBody, _model.get());
               }
            });
        }else if(_tarCls.contains("edit")) {  // 点击编辑按钮
            _add_edit_btn.textContent = "确认编辑";
            _isEditing = true;
            _editIdx   = _idx;
            // 获取编辑项数据
            let _good = _model.get()[_idx];
            _goodsIpts.forEach(function (input, index) {
                input.value = _good[_keys[index]];
            });
            showMask(_mask);
        }
    });

    $.addEvent(window, "beforeunload", function () {
       localStorage.setItem("GMS_GOODS", JSON.stringify(_model.get()));
    });
})();

























