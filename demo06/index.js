//抽象出公共组件类
class Component {
    setState (state) {
        const oldEle = this.el;
        this.state = state;
        this._renderDOM();
        if(this.onStateChange) {
            this.onStateChange(oldEle, this.el);
        }
    }

    _renderDOM(){
        this.el = createDOMFromString(this.render());
        if(this.onClick) {
            this.el.addEventListener('click', this.onClick.bind(this), false);
        }

        return this.el;
    }
}

class LinkButton extends Component {
    constructor(){
        super();

        this.state = {
            isLinked: false
        }
    }

    onClick(){
        this.setState({
            isLinked: !this.state.isLinked
        })
    }

    render () {
        return `
            <button class="link-btn">
                <span class="link-text">${this.state.isLinked ? '取消' : '点赞'}</span>
                <span>👍</span>
            </btn>
        `
    }
}

const createDOMFromString = (domString) => {
    const div = document.createElement('div');
    div.innerHTML = domString;

    return div;
}

const mount = (component, wrapper) => {
    wrapper.appendChild(component._renderDOM());
    component.onStateChange = (oldEle, newEle) => {
        wrapper.insertBefore(newEle, oldEle);
        wrapper.removeChild(oldEle);
    }
}

mount(new LinkButton(), document.getElementById('wrapper'))
