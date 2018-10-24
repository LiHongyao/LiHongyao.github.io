$(function() {
    let datas = null;  // 记录购物车数据
    let selectedIndexs = []; // 记录选中下标
    let editSelectedIdnexs = []; // 记录编辑状态下选中下标
    let isEditing = false; // 记录编辑状态
    // 1.读取购物车
    ShoppingCart.query((orders) => {
        // 判断购物车是否有数据
        if(orders) { // 有数据
            datas = orders;
            $(".content").html(`<ul class="ct-list">${(function() {
                let lis = [];
                orders.forEach((order, index) => {
                    lis[index] = `<li class="order clearFix">
                        <section class="fl check-box">
                            <span class="check-item"></span>
                        </section>
                        <section class="fr info-box clearFix">
                            <img class="fl" src="${order.img}" alt="">
                            <div class="fr infos">
                                <p class="name">${order.name}</p>
                                <p class="des">${order.des}</p>
                                <section class="price-wrapper">
                                    <div class="price-box">
                                        <span>¥</span>
                                        ${(function() {
                                            let priceArr = order.total.split('.');
                                            return `<span class="price">${priceArr[0]}</span>.<span class="point">${priceArr[1]}</span>`;
                                        })()}
                                    </div>
                                    <!-- 加减数量 -->
                                    <div class="counter">
                                        <span class="btn down">-</span>
                                        <input class="input" type="number" value="${order.num}">
                                        <span class="btn up">+</span>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </li>`;
                });
                return lis.join('');
            })()}</ul>`);
        }else {  // 没数据
            $(".content").html("<p class='no-order'>o(╥﹏╥)o，购物车为空~</p>");
        }
    });
    // 2.处理选中
    $('.check-box').click(function() {
        // 获取check元素
        let $checkItem = $(this).find(".check-item");
        // 切换check元素状态
        $checkItem.toggleClass('checked');
        // 在非编辑状态下，根据check元素是否选中赋值checked属性值
        if(!isEditing) {
            $checkItem.hasClass('checked') ? $checkItem.data('checked', true) : $checkItem.data('checked', false);
        }
        // 获取购物车数量长度
        let len = $(".check-box:not(.all-check) .check-item").length;
        // 判断是点击全选还是单独选
        if($(this).hasClass('all-check')) { // 全选
            if($checkItem.hasClass('checked')) { // 选中
                // 更新下标
                for(let i = 0; i < len; i++) {
                    isEditing ? editSelectedIdnexs[i] = i : selectedIndexs[i] = i;
                }
                $(".check-box:not(.all-check) .check-item").addClass('checked')
            }else { // 未选中
                // 如果全选按钮为选中，则根据编辑状态清空下标集合
                isEditing ? editSelectedIdnexs = [] : selectedIndexs = [];
                $(".check-box:not(.all-check) .check-item").removeClass('checked');
            }
            if(!isEditing) {
                updateFoot();
                $(".check-box:not(.all-check) .check-item").data('checked', $checkItem.hasClass('checked'));
            }
        }else { // 单选
            // 获取下标
            let index = $checkItem.parents('.order').index();
            if($checkItem.hasClass('checked')) { // 选中
                // 加入选中下标
                isEditing ? editSelectedIdnexs.push(index) : selectedIndexs.push(index);
                // 如果单选按钮的长度和记录选中下标集合的长度一致，则让全选按钮呈现选中状态
                if(isEditing && len == editSelectedIdnexs.length) {
                    $('.all-check .check-item').addClass('checked')
                }else if(!isEditing && len == selectedIndexs.length) {
                    $('.all-check .check-item').addClass('checked')
                }
            }else { // 未选中
                // 删除选中下标
                isEditing ? editSelectedIdnexs.splice(editSelectedIdnexs.indexOf(index), 1) : selectedIndexs.splice(selectedIndexs.indexOf(index), 1)
                // 去除全选选中状态
                $('.all-check .check-item').removeClass('checked');
            } 
            !isEditing && updateFoot();
        }
    });
    // 3.处理编辑
    $('.barButton-item').click(function() {
        // 更新编辑状态
        isEditing = !isEditing;
        // 更新标题
        $(this).text(isEditing ? "完成" : "编辑");
        // 根据编辑状态切换显示
        if(isEditing) {
            $('.not-editing-item').addClass('hidden').siblings('.delete-btn').removeClass('hidden');
            $('.check-item').removeClass('checked');
        }else {
            // 重置非编辑状态下的选中下标集合
            editSelectedIdnexs = [];
            // 如果在编辑前选中，则修改选中状态
            $('.check-item').each((index, item) => {
                if($(item).data('checked') == true) {
                    $(item).addClass("checked");
                }else {
                    $(item).removeClass("checked");
                }
            });
            if($('.check-box:not(.all-check) .check-item').length == selectedIndexs.length) {
                $('.all-check .check-item').addClass('checked');
            }else {
                $('.all-check .check-item').removeClass('checked');
            }
            // 判断是否还有数据
            if($('.order').length == 0) {
                $(".content").html("<p class='no-order'>o(╥﹏╥)o，购物车为空~</p>");
                $('.all-check .check-item').data('checked', false);
                $('.all-check .check-item').removeClass('checked');
            }
            // 重置选中下标
            selectedIndexs = [];
            $(".check-box:not(.all-check) .check-item").each((index,item) => {
                if($(item).data('checked') == true ) {
                    selectedIndexs.push(index);
                } 
            });
            updateFoot();
            $('.not-editing-item').removeClass('hidden').siblings('.delete-btn').addClass('hidden');
        }
    });

    // 4. 处理‘+’
    $('.up').click(function() {
        // 4.1. 更新输入框的数量值
        let $input = $(this).siblings('.input');
        $input.val(parseInt($input.val()) + 1);
        // 4.2. 修改购物车订单参数
        updateOrder(this);
        updateFoot();
    });
    // 5. 处理‘-’
    $('.down').click(function() {
       // 5.1. 更新输入框的数量值
       let $input = $(this).siblings('.input');
       if($input.val() === '1') {
           return;
       }
       $input.val(parseInt($input.val()) - 1);
       // 5.2. 修改购物车订单参数
       updateOrder(this);
       updateFoot();
    });
    // 6. 处理输入框
    $('.input').change(function() {
        // 6.1. 异常处理,数量不能小于1
        if($(this).val() < 1) {
            $(this).val(1);
        }
        // 6.2. 修改购物车订单参数
        updateOrder(this);
        updateFoot();
    });
    // 7. 处理删除
    $('.delete-btn').click(function() {
        let $orders = $('.order');
        editSelectedIdnexs.forEach(index => {
            // 删除页面元素
            $orders.eq(index).remove();
            datas.splice(index, 1);
            // 删除非编辑状态下的选中下标
            let idx = selectedIndexs.indexOf(index);
            if(idx != -1) {
                selectedIndexs.splice(idx, 1);
            }
        });
        // 更新全选状态
        $('.all-check .check-item').removeClass('checked');
        // 删除本地购物车数据
        ShoppingCart.remove(editSelectedIdnexs);
        
        
    });

    // 更新底部数据变化
    function updateFoot() {
        // 更新去结算购物车订单数量
        $('.settlement').text(`去结算(${selectedIndexs.length})`);
        // 更新结算总结
        let total = 0;
        selectedIndexs.forEach(index => {
            total += parseFloat(datas[index].total);
        });
        $('.total-price').text(`¥ ${total.toFixed(2)}`);
    }
    // 更新购物车每一个订单的数据变化
    function updateOrder(tar) {
        // 获取li
        let $order  = $(tar).parents('.order');
        // 获取li所在的下标
        let index   = $order.index();
        // 根据下标获取购物车数据
        let order   = datas[index];
        // 修改当前订单数据
        order.num    = parseInt($order.find('.input').val());
        order.total  = (order.num * order.price).toFixed(2);
        // 修改本地购物车存储的数据
        ShoppingCart.modify(index, order);
        // 修改页面价格显示
        let priceArr = order.total.toString().split('.');
        $order.find('.price').text(priceArr[0]);
        $order.find('.point').text(priceArr[1]);
    }
});
