//在 demo02 的基础上进行优化并添加相关的事件
const createDOMFromString = (domString) => {
    const div = document.createElement('div');
    div.innerHTML = domString;

    return div;
}

class LinkButton {
    render (linkText) {
        this.el = createDOMFromString(`
            <button class="link-btn">
                <span class="link-text">${linkText}</span>
                <span>👍</span>
            </btn>
        `)

        this.el.addEventListener('click', () => {
            console.log('click');
        }, false);

        return this.el;
    }
}

const wrapper = document.getElementById('wrapper')
const linkButton1 = new LinkButton();
wrapper.appendChild(linkButton1.render('点赞'));

const linkButton2 = new LinkButton();
wrapper.appendChild(linkButton2.render('取消'));