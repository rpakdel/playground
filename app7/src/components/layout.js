export default class Layout {
    constructor(el, menu, main) {
        this.el = el;
        this.menu = menu;
        this.main = main;
    }

    render() {
        this.el.innerHTML = 
            this.menu.render() + 
            this.main.render(); 
    }
}
