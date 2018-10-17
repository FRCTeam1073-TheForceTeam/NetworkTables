function NetworkTablesObject(key, value){
    this.data = document.getElementById("dataGoesHere");
    this.currKey = key;
    this.currValue = value;
    this.init();
}

Object.defineProperty(NetworkTablesObject.prototype, "key", {
    get: function() {
        return this.currKey;
    },
    set: function(key) {
        this.currKey = key;
    }
});

Object.defineProperty(NetworkTablesObject.prototype, "value", {
    get: function() {
        return this.currValue;
    },
    set: function(value) {
        this.currValue = value;
    }
});

NetworkTablesObject.prototype.init = function(){
    this.element = document.createElement("div");
    this.data.appendChild(this.element);
    this.element.innerHTML = this.key + " init " + this.value;
    console.log(this.key + " init " + this.value);
};

NetworkTablesObject.prototype.refresh = function(){
    this.value = NetworkTables.getValue(this.key, 0);
    this.element.innerHTML = this.key + " refresh " + this.value;
    console.log(this.key + " refresh " + this.value);
};