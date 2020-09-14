let date1 = new Date();
date1.setMonth(0);
date1.setDate(1);
const currentYear = new Date().getFullYear();
let year = currentYear;
let i = 1;

while (currentYear === year) {
  date2 = new Date(date1);
  date2.setDate(date1.getDate() + 6);
  console.log(
    `${i} : ${date1.getDate()}-${date2.getDate()}/${
      date2.getMonth() + 1
    }/${date2.getFullYear()}`
  );
  date1 = new Date(date2);
  date1.setDate(date2.getDate() + 1);
  year = date1.getFullYear();
  i++;
}
