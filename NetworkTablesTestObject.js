function NetworkTablesTestObject(key, value){
    this.data = document.getElementById("dataGoesHere");
    this.currKey = key;
    this.currValue = value;
    this.init();
}

Object.defineProperty(NetworkTablesTestObject.prototype, "key", {
    get: function(){
        return this.currKey;
    },
    set: function(key){
        this.currKey = key;
    }
});

Object.defineProperty(NetworkTablesTestObject.prototype, "value", {
    get: function(){
        return this.currValue;
    },
    set: function(value){
        this.currValue = value;
    }
});

NetworkTablesTestObject.prototype.init = function(){
    this.element = document.createElement("div");
    this.element.setAttribute("id", this.key);
    this.data.appendChild(this.element);

    this.element.innerHTML = this.key + " init " + this.value;
    console.log(this.key + " init " + this.value);
};

NetworkTablesTestObject.prototype.refresh = function(){
    this.value = NetworkTables.getValue(this.key, 0);
    if (this.value.search("Failed") != -1) this.element.innerHTML = "<mark style='color:black;background-color:red'>" + this.value + "</mark>";
    else if (this.value.search("Working") != -1) this.element.innerHTML = "<mark style='color:white;background-color:green'>" + this.value + "</mark>";
    else this.element.innerHTML = "<mark style='color:black;background-color:yellow'>" + this.value + "</mark>";
    console.log(this.key + ": " + this.value);
};