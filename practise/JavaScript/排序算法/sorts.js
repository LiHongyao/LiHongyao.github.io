/**
 * 冒泡排序
 * 算法的原理如下：
 * 1.比较相邻的元素。如果第一个比第二个大，就交换他们两个。
 * 2.对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
 * 3.针对所有的元素重复以上的步骤，除了最后一个。
 * 4.持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
 */
exports.bubbleSort = function(arr) {
    let i = arr.length, j, tempExchangVal;
    while(i > 0) {
        for(j = 0; j < i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                tempExchangVal = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tempExchangVal;
            }
            console.log(`${i}-${j}`,arr);
        }
        i--;
    }
    return arr;
}


