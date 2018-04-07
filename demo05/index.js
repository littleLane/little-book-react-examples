//状态改变 => 构建新的 DOM 元素更新页面
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

    setState (state){
        const oldEle = this.el;
        this.state = state;
        this.el = this.render();

        if(this.onStateChange) {
            this.onStateChange(oldEle, this.el);
        }
    }

    changeLinkText(){
        this.setState({
            isLinked: !this.state.isLinked
        });
    }

    render () {
        this.el = createDOMFromString(`
            <button class="link-btn">
                <span class="link-text">${this.state.isLinked ? '取消' : '点赞'}</span>
                <span>👍</span>
            </btn>
        `)

        this.el.addEventListener('click', this.changeLinkText.bind(this), false);

        return this.el;
    }
}

const wrapper = document.getElementById('wrapper')
const linkButton = new LinkButton();
wrapper.appendChild(linkButton.render());
linkButton.onStateChange = (oldEle, newEle) => {
    wrapper.insertBefore(newEle, oldEle);
    wrapper.removeChild(oldEle);
}

// const linkButton2 = new LinkButton();
// wrapper.appendChild(linkButton2.render());
