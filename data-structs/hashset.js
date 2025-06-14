// only stores unique values
// only care about if it exists or not
class HashSet {
  constructor() {
    this.data = {};
  }

  // O(1)
  add(val) {
    this.data[val] = true;
  }

  // O(1)
  exists(val) {
    return val in this.data;
  }

  // O(1)
  remove(val) {
    delete this.data[val];
  }
}

const h = new HashSet();

h.add("a");

console.log(h.exists("a"));
console.log(h.exists("b"));

console.log(h.remove("a"));
console.log(h.exists("a"));

/////////////////// Built in func ////////////////////////

const s = new Set(["a", "b", "f"]);

console.log(s.has("a"));
console.log(s.has("d"));
