import $ from 'jquery';

export default class Collapsable {
    constructor(node, options = {}) {
        this.node = node;
        this.options = options;

        // Toggle speed
        this.speed = this.options?.speed ?? 500 // Default of 500 milliseconds
        
        // Active state of collapsable
        this.active = false;

        // Define trigger and target
        this.trigger = node.querySelector('[data-collapsable-trigger]');
        this.target = node.querySelector('[data-collapsable-target]');

        // Bind `this` so we don't have to do it for all clicks
        this.handleClick = this.handleClick.bind(this);

        // Add click event - opens collapsable content
        this.trigger.addEventListener('click', this.handleClick);

        // Add initialized class
        this.node.classList.add('collapsable-initialized');
    }

    async handleClick(e) {
        e.preventDefault();
        
        // If panel is open and close callback has been passed
        if(this.active && this.options?.closeStart) {
            this.options.closeStart(this.node)
        }
        
        // If panel is closed and open callback has been passed
        if(!this.active && this.options?.openStart) {
            this.options.openStart(this.node)
        }

        // Toggle collapsable content
        $(this.target).stop(true, false).slideToggle(this.speed);

        // Reverse active state
        this.active = !this.active;

        
        // Await rest of script untill timeout completes
        if(!this.active) {
            await new Promise((resolve) => {
                setTimeout(resolve, this.options?.speed ?? DURATION);
            })
        }

        // Toggle class based on active state - usefull for extra CSS styling
        this.node.classList.toggle('collapsable-active', this.active);

    }
}