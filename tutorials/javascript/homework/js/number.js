/**
 * Created by LiHongyao on 2017/9/5.
 */

(function(){
	// 1、获取dom元素
	var oFirIpt = document.getElementById('firstIpt');
	var oSecIpt = document.getElementById('secondIpt');
	var oSelect = document.getElementById('operator');
	var oResult = document.getElementById('result');

	// 2、事件添加
	oFirIpt.oninput = function () {
	    calculate(oFirIpt, oSecIpt, oSelect, function (result) {
	        oResult.textContent = result;
	    });
	}
	oSecIpt.oninput = function () {
	    calculate(oFirIpt, oSecIpt, oSelect, function (result) {
	        oResult.textContent = result;
	    });
	}
	oSelect.onchange = function () {
	    calculate(oFirIpt, oSecIpt, oSelect, function (result) {
	        oResult.textContent = result;
	    });
	}
})();









