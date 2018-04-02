

/**
 * 冒泡排序
 * @param arr   排序数组
 * @param rule  排序规则，默认为升序，降序设值为 descending
 *
 * 提示：适合数据规模小的情况下使用
 * 冒泡原理：逐一比较，互换位置
 * 如：1，3，2，7，5
 * 第1轮第1次：1，3，2，7，5
 * 第1轮第2次：1，3，2，7，5
 * 第1轮第3次：1，3，2，7，5
 * 第1轮第4次：1，3，2，7，5
 *
 * 第2轮第1次：1，2，3，7，5
 * 第2轮第2次：1，2，3，7，5
 * 第2轮第3次：1，2，3，7，5
 *
 * 第3轮第1次：1，2，3，7，5
 * 第3轮第2次：1，2，3，7，5
 *
 * 第4轮第1次：1，2，3，5，7
 *
 * 比较n-1轮，每一轮比较i-1次
 */
function sort_bubbling(arr, rule) {
    let arr_len = arr.length;
    let temp    = null;
    for(let i = 0; i < arr_len - 1; i++) {
        for(let j = 0; j < arr_len - i - 1; j++) {
            switch(rule) {
                case "descending": {
                    if(arr[j] < arr[j + 1]) {
                        temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                } break;
                default: {
                    if(arr[j] > arr[j + 1]) {
                        temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
        }
    }
    return arr;
}


















