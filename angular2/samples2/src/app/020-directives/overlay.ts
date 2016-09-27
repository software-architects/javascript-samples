// The following class is based on the following book: 
// Gechev, Minko. Switching to Angular 2. Packt Publishing.
// It is a great book and I can really recommand buying it.

class Overlay {
    private el: HTMLElement;
    constructor() {
        var el = document.createElement('div');
        el.className = 'rsTooltip';
        this.el = el;
    }
    close() {
        this.el.hidden = true;
    }
    open(el: any, text: string) {
        this.el.innerHTML = text;
        this.el.hidden = false;
        var rect = el.nativeElement.getBoundingClientRect();
        this.el.style.left = rect.left + 5 + 'px';
        this.el.style.top = rect.top + 5 + 'px';
    }
    attach(target: any) {
        target.appendChild(this.el);
    }
    detach() {
        this.el.parentNode.removeChild(this.el);
    }
}

export default Overlay;