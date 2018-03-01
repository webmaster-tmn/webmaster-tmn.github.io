var Slideshow = function(window) {
    function Slideshow(domId, delay) {
        this.delay = delay || 6000;
        this.container = document.getElementById(domId);
        this.items = this.container.getElementsByTagName("li");
        this.current = 0;
    }
    
    Slideshow.prototype = {
        currentItem: function() {
            return this.items[this.current];
        },
        nextIndex: function() {
            return (this.current + 1) % this.items.length;
        },
        nextItem: function() {
            return this.items[this.nextIndex()];
//            return this.items[2];
        },
        advance: function() {
            this.currentItem().className = "fade-in";
            this.nextItem().className = "fade-out";
            this.current = this.nextIndex();
        },
        start: function() {
            // Function.prototype.bind works in EMCA5 compliant
            // browsers only :(
            window.setInterval(this.advance.bind(this), this.delay);
        }
    };
    
    return Slideshow;
}(window);

