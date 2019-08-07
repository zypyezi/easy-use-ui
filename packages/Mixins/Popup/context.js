

export const context = {
    zIndex: 2000,
    stack: [],
    top: function() {
        return this.stack[this.stack.length - 1]
    }
}


