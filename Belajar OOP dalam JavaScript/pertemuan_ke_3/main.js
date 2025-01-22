// Constructor function
// Cunstructor function adalah
// New operator adalah operator yang memperbolehkan developer untuk membuat suatu instance yang didefinisikan oleh object yang dibuat oleh user dan dianggap sebagai built in object (object yang berada didalam javasrcipt).
// Seperti hal nya prototype yang berada didalam javascript.
// Contoh:
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
