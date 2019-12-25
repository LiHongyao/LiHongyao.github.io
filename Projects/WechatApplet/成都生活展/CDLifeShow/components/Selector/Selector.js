Component({
    properties: {
        source: Array
    },
    data: {
        selIndex: ""
    },
    methods: {
        handleItemClick(event) {
            let { text, index } = event.target.dataset;
            this.setData({ selIndex: index});
            this.triggerEvent('change', { text });
        }
    }
})
