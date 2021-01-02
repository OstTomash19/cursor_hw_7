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
    const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    const taxes = +getMyTaxes.call(country, salary).toFixed(2);
    const profit = +(salary - taxes).toFixed(2);

    return console.log({salary, taxes, profit});
};

console.log(`Ви заплатите такий податок - ${getMyTaxes.call(ukraine, 2000)}$;
Загалом IT- спеціалісти платять ${getMiddleTaxes.call(latvia)}$ податку;
Крім того, всі IT-спеціалісти разом платять податок у розмірі - ${getTotalTaxes.call(ukraine)}$`);

setInterval(() => getMySalary(ukraine), 10000);