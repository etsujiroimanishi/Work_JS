window.onload = function () {
  new Vue({
    el: '#app',
    data: {
      result: "0",
      is_calc: false,
      dataArrays: [
        ["7", "8", "9", "÷"],
        ["4", "5", "6", "×"],
        ["1", "2", "3", "-"],
        ["0", ".", "=", "+"],
      ],
      operators_list: ["÷", "×", "-", "+"  ],
    },
    methods: {
      c_click: function () {
        this.result = "0";
        this.is_calc = false;
      },
      btn_Click: function (val) {
        if (this.operators_list.includes(val)) {
          this.ope_click(val);
        } else if (val === "=") {
          this.equal_click();
        } else {
          this.num_click(val);
        }
      },
      num_click: function (val) {
        if (this.is_calc) this.result = "0";
        this.is_calc = false;

        if (this.result == "0" && val == "0") {
          this.result = "0";
        } else if (this.result == "0" && val == ".") {
          this.result = "0.";
        } else if (this.result == "0") {
          this.result = val;
        } else {
          this.result += val;
        }
      },
      ope_click: function (val) {
        if (this.is_calc) this.is_calc = false;

        if (this.is_ope_last()) {
          this.result = this.result.slice(0, -1) + val;
        } else {
          this.result += val;
        }
      },
      equal_click: function () {
        if (this.is_ope_last()) this.result = this.result.slice(0, -1);

        var temp = new Function("return " + this.result.replaceAll("×", "*").replaceAll("÷", "/"))();
        if (temp == Infinity || Number.isNaN(temp)) {
          this.result = "Error";
        } else {
          this.result = temp;
          this.is_calc = true;
        }
      },
      is_ope_last: function () {
        return this.operators_list.includes(this.result.toString().slice(-1));
      },
    },
  });
};