//在 demo03 的基础上对点击事件添加逻辑代码，完善点赞功能
const createDOMFromString = (domString) => {
    const div = document.createElement('div');
    div.innerHTML = domString;

    return div;
}

class LinkButton {
    constructor(){
        this.state = {
            isLinked: false
        }
    }

    changeLinkText(){
        const linkText = this.el.querySelector('.link-text');
        this.state.isLinked = !this.state.isLinked;
        linkText.innerHTML = this.state.isLinked ? '取消' : '点赞';
    }

    render () {
        this.el = createDOMFromString(`
            <button class="link-btn">
                <span class="link-text">点赞</span>
                <span>👍</span>
            </btn>
        `)

        this.el.addEventListener('click', () => {
            this.changeLinkText()
        }, false);

        return this.el;
    }
}

const wrapper = document.getElementById('wrapper')
const linkButton = new LinkButton();
wrapper.appendChild(linkButton.render());

// const linkButton2 = new LinkButton();
// wrapper.appendChild(linkButton2.render());
