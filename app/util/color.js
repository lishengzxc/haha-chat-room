var colors = (function () {

  var beforeIndex = 0;
  var index;

  var colorsList = [
    '001f3f',
    '0074d9',
    '7fdbff',
    '39cccc',
    '3d9970',
    '2ecc40',
    '01ff70',
    'ffdc00',
    'ff851b',
    'ff4136',
    '85144b',
    'f012be',
    'b10dc9',
    '111111',
    'aaaaaa',
    'dddddd'
  ];

  var randomIndex = () => Math.random() * 15 | 0;

  var getRandomColor = () => {
    index = randomIndex();
    if (index !== beforeIndex) {
      beforeIndex = index;
      return '#' + colorsList[index];
    } else {
      getRandomColor();
    }
  };

  return {
    get: getRandomColor
  }
}());

module.exports = colors;