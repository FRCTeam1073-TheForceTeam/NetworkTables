function NetworkTableObject(key, value){
    this.key = key;
    this.value = value;
    this.init();
}


NetworkTableObject.prototype.init = function(){
    console.log(this.key + " " + this.value);
};

NetworkTableObject.prototype.refresh = function(){
    console.log(this.key + " " + this.value);
};