class Table {

    constructor(arr){
        this.header = arr[0];
        this.body = arr.slice(1, -1);
    }

    get RowCount() {
        return this.body.length
    }

    get ColumnCount() {
        return this.header.length
    }
}

module.exports = Table;
