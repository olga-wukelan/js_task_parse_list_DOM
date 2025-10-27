'use strict';

const listArray = document.querySelectorAll('li');

function sortList() {
  const listParent = listArray.length > 0 ? listArray[0].parentElement : null;

  if (!listParent) {
    return;
  }

  const listItemsArray = Array.from(listArray);

  listItemsArray.sort((a, b) => {
    const getSalary = (item) => {
      const cleanSalary = item.dataset.salary.replace(/[^0-9.]/g, '');

      return parseFloat(cleanSalary) || 0;
    };

    return getSalary(b) - getSalary(a);
  });

  for (const item of listItemsArray) {
    listParent.append(item);
  }
}

function getEmployees() {
  const items = listArray;

  const employeesArr = Array.from(items).map((item) => {
    const employeesName = item.textContent.trim();
    const salary = parseFloat(item.dataset.salary.replace(/[^0-9.]/g, ''));

    return {
      name: employeesName,
      position: item.dataset.position,
      salary: salary,
      age: item.dataset.age,
    };
  });

  return employeesArr;
}

console.log(getEmployees());
console.log(sortList());
