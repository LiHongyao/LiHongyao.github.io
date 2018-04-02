

$(function () {


    $("body")

    loadingXmlDatas();
    function loadingXmlDatas() {
        $.ajax({
            type: "GET",
            url: "xml/data.xml",
            datatype: "xml",
            timeout: 1000,
            cache: false,
            success: function (xml) {
                var frag = $("<ul/>");
                $(xml).find("students").find("student").each(function () {
                   var $children = $(this).children();

                });
            },
            error: function () {
                console.log("加载出错！");
            }
        });
    }
});





























