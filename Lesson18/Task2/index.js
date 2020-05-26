//wallet - заимствование метода.

export const wallet = {
    transaction: [1, 2, 3, 4, 5, 13, 78, 99],

    getMax() {
        return Math.max.apply(null, this.transaction);
    },

    getMin() {
        return Math.min.apply(null, this.transaction);
    },
}

// console.log(wallet.getMax());
// console.log(wallet.getMin());