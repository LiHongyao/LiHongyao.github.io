// 文档就绪
$(function() {
    // 获取数据
    const LOAN_PROCESS = Model.GET("LOAN_PROCESS");
    const LATEST_INFOMATIONS = Model.GET("LATEST_INFOMATIONS");
    // 调用函数加载贷款流程
    loadingLoanProcess();
    loadingLatestInfomations();

    // 定义函数/方法（功能/部门）
    function loadingLoanProcess() {
        let lis = LOAN_PROCESS.map(item => `<li>
            <img src="./images/${item.imgUrl}">
            <p>${item.text}</p>
        </li>`);
        $(".process-list").html(lis.join(""));
    }
    function loadingLatestInfomations() {
        let lis = LATEST_INFOMATIONS.map(item => `<li>
            <div class="infos">${(function() {
                let htmlStr = ``;
                for(let key in item.infos) {
                    htmlStr += `${key} : <span>${item.infos[key]}</span>`;
                }
                return htmlStr;
            })()}</div>
            <div class="desc">
                <span class="date">${item.date}</span>
                <div class="btns">
                    <span>查看详细信息</span>
                    <span>评论</span>
                </div>
            </div>
        </li>`);
        $(".infomation-list").html(lis.join(""));
    }
});
