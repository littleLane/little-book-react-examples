//实现一个基本的点赞、取消功能
const button = document.querySelector('.link-btn');
const buttonText = document.querySelector('.link-text');

let isLinked = false;

button.addEventListener('click', () => {
    isLinked = !isLinked;

    if(isLinked){
        buttonText.innerHTML = '取消';
    }else{
        buttonText.innerHTML = '点赞';
    }
}, false);