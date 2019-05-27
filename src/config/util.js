/**
 * @description [防抖，立即执行]
 * @param {*} func 执行函数
 * @param {*} wait 重置时间
 */
export function debounce(func,wait=1000,immediately=true) {
  let timeout;
  return function () {
      let context = this;
      let args = arguments;
      if (timeout) clearTimeout(timeout);
      if(immediately) {
        let callNow = !timeout;
        timeout = setTimeout(() => {
            timeout = null;
        }, wait)
        if (callNow) func.apply(context, args)
      } else {
        timeout = setTimeout(() => {
          func.apply(context, args)
        }, wait);
      }
  }
}
export function getLocalTime(time) {     
  return new Date(parseInt(time) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
}