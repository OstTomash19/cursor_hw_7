const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const getMyTaxes = function (salary) {
  return this.tax * salary;
};

const getMiddleTaxes = function () {
  return this.middleSalary * this.tax;
};

const getTotalTaxes = function () {
  return this.tax * this.middleSalary * this.vacancies;
};

const getMySalary = (country) => {
    const minSalary = 1500;
    const maxSalary = 2000;
    const mySalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    const myTaxes = +getMyTaxes.call(country, mySalary).toFixed(2);
    const myProfit = +(mySalary - myTaxes).toFixed(2);

    return setInterval(() => console.log({
        salary: mySalary,
        taxes: myTaxes,
        profit: myProfit
    }), 10000);
};

console.log(`Ви заплатите такий податок - ${getMyTaxes.call(ukraine, 2000)}$;
Загалом IT- спеціалісти платять ${getMiddleTaxes.call(latvia)}$ податку;
Крім того, всі IT-спеціалісти разом платять податок у розмірі - ${getTotalTaxes.call(ukraine)}$`);
getMySalary(ukraine);