class LinkButton {
    render (linkText) {
        return `
            <button id="link-btn">
                <span class="link-text">${linkText}</span>
                <span>👍</span>
            </btn>
        `
    }
}

const wrapper = document.getElementById('wrapper')
const linkButton1 = new LinkButton();
wrapper.innerHTML = linkButton1.render('点赞');

const linkButton2 = new LinkButton();
wrapper.innerHTML += linkButton2.render('取消');