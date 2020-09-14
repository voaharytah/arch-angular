export const commandesFilter = [
  { label: "Tous", value: "" },
  { label: "Standard", value: "Standard" },
  { label: "SAV", value: "SAV" },
];

export const devisSortBy = [
  { label: "Date devis asc", value: "dateorder_1" },
  { label: "Date devis desc", value: "dateorder_0" },
  { label: "N° devis asc", value: "order_0" },
  { label: "N° devis desc", value: "order_1" },
  { label: "Référence asc", value: "reference_0" },
  { label: "Référence desc", value: "reference_1" },
  { label: "Montant asc", value: "amount_0" },
  { label: "Montant desc", value: "amount_1" },
];

export const monthsOptions = () => {
  return [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ].map((month, index) => ({ label: month, value: index + 1 }));
};

export const yearsOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year > 2013; year--) {
    years.push({ value: year, label: year.toLocaleString() });
  }
  return years;
};

export const getWeekInYear = () => {
  const currentYear = new Date().getFullYear();
  let date1 = new Date();
  date1.setDate(1);
  date1.setMonth(0);
  let date2 = new Date();
  let year = currentYear;
  const result = [];
  let i = 1;

  while (currentYear === year) {
    date2 = new Date(date1);
    date2.setDate(date1.getDate() + 6);
    result.push({
      label: `${i} : ${date1.getDate()}-${date2.getDate()}/${
        date2.getMonth() + 1
      }/${year}`,
      value: i,
    });
    date1 = new Date(date2);
    date1.setDate(date2.getDate() + 1);
    i++;
    year = date1.getFullYear();
  }
  return result;
};

export const valueToMonth = (value) =>
  typeof value === "number"
    ? monthsOptions()[value - 1]
      ? monthsOptions()[value - 1].label
      : ""
    : "";

export const extractLabelOptions = (value, options) => {
  const option = options.find((o) => o.value === value);
  return option ? option.label : "";
};

export const years = yearsOptions();
export const months = monthsOptions();
export const weekInYear = getWeekInYear();
