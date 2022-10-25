const sortYears = (year) =>
  year.sort(function (a, b) {
    return b - a;
  });

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));
