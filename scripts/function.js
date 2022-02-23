/**
 * 用于选择input[checkbox]
 * @param {*} a 
 */
 function ChangeValueClick(a) {
    var event = document.createEvent('MouseEvents');
    event.initEvent('blur', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('change', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('click', true, false);
    a.dispatchEvent(event);

    var ev = document.createEvent('HTMLEvents');
     ev.clientX = a.offsetLeft;
     ev.clientY = a.offsetTop;
     console.log(ev.clientX,ev.clientY)
     ev.initEvent('click', false, true);

    event = document.createEvent('MouseEvents');
    event.initEvent('focus', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('focusin', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('focusout', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('mousedown', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('mousemove', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('mouseout', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('mouseup', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('mouseover', true, false);
    a.dispatchEvent(event);
}

/**
 * 修改input
 * @param {*} node 
 * @param {*} text 
 */
function SetValue(node, text) {
    var nodeName = node.nodeName.toLowerCase();
    var event;
    var descriptor;
    if (nodeName === 'input' || nodeName === 'textarea') {
        //获取getter setter
        descriptor = Object.getOwnPropertyDescriptor(node, 'value');
        //删除value的getter和setter并重新赋值
        delete node['value'];
        node.value = text;
        //触发事件以便react和vue内部更改值
        event = document.createEvent('HTMLEvents');
        event.initEvent('propertychange', false, false);
        event.propertyName = 'value';
        node.dispatchEvent(event);
        //必须同时触发，缺一不可
        event = document.createEvent('HTMLEvents');
        event.initEvent('input', true, false);
        node.dispatchEvent(event);
        //重新绑定getter和setter
        if (descriptor) {
            Object.defineProperty(node, 'value', descriptor);
        }
        ChangeValueClick(node)
        event = document.createEvent('MouseEvents');
        event.initEvent('keyup', true, false);
        node.dispatchEvent(event);
    }
}

/**
 * 用于选择input[checkbox]
 * @param {*} a 
 */
function ChangeValueInput(a,value) {
    var event;
    var descriptor;
    event = document.createEvent('MouseEvents');
    event.initEvent('blur', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('click', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('focus', true, false);
    a.dispatchEvent(event);

    descriptor = Object.getOwnPropertyDescriptor(a, 'value');
    //删除value的getter和setter并重新赋值
    delete a['value'];
    a.value = value;
    //触发事件以便react和vue内部更改值
    event = document.createEvent('HTMLEvents');
    event.initEvent('propertychange', false, false);
    event.propertyName = 'value';
    a.dispatchEvent(event);
    //必须同时触发，缺一不可
    event = document.createEvent('HTMLEvents');
    event.initEvent('input', true, false);
    a.dispatchEvent(event);
    //重新绑定getter和setter
    if (descriptor) {
        Object.defineProperty(a, 'value', descriptor);
    }

    event = document.createEvent('MouseEvents');
    event.initEvent('focusin', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('focusout', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('mousedown', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('mousemove', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('mouseout', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('mouseup', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('mouseover', true, false);
    a.dispatchEvent(event);

    event = document.createEvent('MouseEvents');
    event.initEvent('onDateUpdate', true, false);
    a.dispatchEvent(event);
}

/**
 * 获取URL参数值
 * @param {目标网址} url 
 * @param {参数名}} variable 
 */
 function getUrlVar(url, variable) {
    if (url && url.indexOf('?') != -1) {
        var query = url.split('?')[1];
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) { return pair[1]; }
        }
    }
    return (false);
}

function unique(arr){
    var hash=[];
    for (var i = 0; i < arr.length; i++) {
       if(hash.indexOf(arr[i])==-1){
        hash.push(arr[i]);
       }
    }
    return hash;
}

function set_select_checked(select, checkValue) {

    for (var i = 0; i < select.options.length; i++) {

        if (select.options[i].value == checkValue) {

            select.options[i].selected = true;

            ChangeValueClick(select.options[i])

            break;
        }
    }
}

//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    minNum = parseInt(minNum);
    maxNum = parseInt(maxNum);
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

function ShowMsg(title, msg, time, type) {
    switch (type) {
        case 1:
            var msg_type = 'log';
            break;
        case 2:
            var msg_type = 'success';
            break;
        case 3:
            var msg_type = 'warn';
            break;
        case 4:
            var msg_type = 'error';
            break;
    }
    naranja()[msg_type]({
        title: title,
        text: msg,
        timeout: time,
        buttons: []
    })
}