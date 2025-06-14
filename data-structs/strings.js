class MyString {
  constructor(val) {
    this.chars = val ? val.split("") : [];
  }

  push(char) {
    this.chars.push(char);
  }

  toString() {
    return this.chars.join("");
  }

  pop(idx) {
    this.chars.splice(idx, 1);
  }

  length() {
    return this.chars.length;
  }
}

const s = new MyString("alec");

console.log(s.toString());

s.push("f");
console.log(s.toString());

s.pop(3);
console.log(s.toString());

s.pop(1);
console.log(s.toString());
