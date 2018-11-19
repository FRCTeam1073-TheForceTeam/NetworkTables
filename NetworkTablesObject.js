function NetworkTablesObject(key, value){
    this.data = document.getElementById("dataGoesHere");
    this.currKey = key;
    this.currSlider;
    this.currValue = value;
    this.init();
}

Object.defineProperty(NetworkTablesObject.prototype, "key", {
    get: function(){
        return this.currKey;
    },
    set: function(key){
        this.currKey = key;
    }
});

Object.defineProperty(NetworkTablesObject.prototype, "value", {
    get: function(){
        return this.currValue;
    },
    set: function(value){
        this.currValue = value;
    }
});

Object.defineProperty(NetworkTablesObject.prototype, "slider", {
    get: function(){
        return this.currSlider;
    },
    set: function(slider){
        this.currSlider = slider;
    }
});

NetworkTablesObject.prototype.init = function(){
    this.element = document.createElement("div");
    this.element.setAttribute("id", this.key);
    this.element.setAttribute("value", this.value);
    this.data.appendChild(this.element);

    this.slider = document.createElement("input");
    this.slider.setAttribute("type", "range");
    this.slider.setAttribute("min", 0);
    this.slider.setAttribute("max", 100);
    this.slider.setAttribute("value", this.value);
    this.slider.setAttribute("id", this.key + "/Slider");
    this.data.appendChild(this.slider);

    this.sliderInputInit(this.key);

    this.element.innerHTML = this.key + " init " + this.value;
    console.log(this.key + " init " + this.value);
};

NetworkTablesObject.prototype.refresh = function(){
    this.value = NetworkTables.getValue(this.key, 0);
    document.getElementById(this.key + "/Slider").setAttribute("value", this.value);
    this.element.setAttribute("value", this.value);
    this.element.innerHTML = this.key + " refresh " + this.value;
    console.log(this.key + " refresh " + this.value);
};

NetworkTablesObject.prototype.sliderInputInit = function(key){
    slider = document.getElementById(key + "/Slider");
    document.getElementById(key + "/Slider").addEventListener("change", function(){
        console.log(key + " slider " + document.getElementById(key + "/Slider").value);
        NetworkTables.putValue(key, Number(document.getElementById(key + "/Slider").value));
    });
};