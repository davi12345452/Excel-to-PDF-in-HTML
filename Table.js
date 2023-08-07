class Table {
    constructor(arr){
        this.header = arr[0];
        this.body = arr.slice(1, -1);
    }
}

module.exports = Table;
