/**
 * Created by qinqi on 08/07/2017.
 */

/**
 * 功能:给定元素，返回第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele) {
    return ele.firstElementChild || ele.firstChild;
}
/**
 * 功能:给定元素，返回最后一个子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele) {
    return ele.firstElementChild || ele.firstChild;
}
/**
 * 功能:给定元素，返回下一个兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele) {
    return ele.nextElementSibling || ele.nextSibling;
}
/**
 * 功能:给定元素，返回上一个兄弟节点，并返回
 * @param elw
 * @returns {Element|*|Node}
 */
function getPrevNode(elw) {
    return ele.previousElementSibling || ele.previousSibling;
}
/**
 * 功能:给定元素和索引值，查找制定索引值的兄弟元素节点，并返回
 * @param ele
 * @param index
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele, index) {
    return ele.parentNode.children[index];
}
/**
 *功能:给定元素，查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele) {
    var arr = ele.parentNode.children;
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== ele) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}
/**
 * 功能:封装getElementById()
 * @param id
 * @returns {Element}
 */
function getEle(id) {
    return document.getElementById(id);
}

/**
 * 通过传递不同的参数获取不同的元素
 * @param str
 * @returns {string}
 */
function $(str) {
    var firstChar = str.charAt(0);
    var getEle = "";
    if (firstChar === "#") {
        getEle = document.getElementById(str.slice(1));
    } else if (firstChar === ".") {
        getEle = document.getElementsByClassName(str.slice(1));
    } else {
        getEle = document.getElementsByTagName(str);
    }
    return getEle;
}