
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (matrix) {
      const result = matrix.reduce((resultArray, item, index) => {

          return (index % 2 === 0) ? resultArray.concat(item) : resultArray.concat(item.reverse());

          }, []);

          return result;
        }
  else return [];
}

