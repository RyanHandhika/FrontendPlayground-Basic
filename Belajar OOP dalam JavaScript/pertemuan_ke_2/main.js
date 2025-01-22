// Factory function
// Factory function adalah sebuah fungsi yang mengembalikan nilai berupa object.
// Contoh:
// Function convert rgb to hex and show rgb
function convertColor(r, g, b) {
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = () => {
    return `rgb(${r}, ${g}, ${b})`;
  };

  color.hex = () => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return color;
}
