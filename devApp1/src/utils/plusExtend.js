const plusExtends = fn => {
    alert("进入监听")
    if (window.plus) {
        alert("h5+已经准备好了", window.plus)
        setTimeout(fn, 0)
    } else {
        document.addEventListener('plusready', fn, false)
    }
}
export default plusExtends