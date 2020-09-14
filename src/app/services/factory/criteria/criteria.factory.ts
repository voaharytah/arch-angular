import {
  extractLabelOptions,
  valueToMonth,
  devisSortBy,
} from "./../../../data/constants/filters";
import { DevisFilter } from "@data/models/criteria.model";

export const createCriteria = (filterData) => {
  const {
    year,
    month,
    dossier_type,
    refCli,
    codeDevis,
    sortBy,
    date_livraison,
    type_commande,
  } = filterData;
  const isType_commande = type_commande && type_commande !== "Tous";
  const sorted = sortBy.split("_")[0];
  const reverse = +sortBy.split("_")[1];

  let filter = `('dossier_type','in',['${dossier_type}'])`;
  year && (filter += `,('annee','=',${year})`);
  month && !isType_commande && (filter += `,('mois','=',${month})`);
  refCli && (filter += `,('ref_client','like', '${refCli}')`);
  codeDevis && (filter += `,('dossier_no','=','${codeDevis}')`);
  date_livraison &&
    date_livraison.start &&
    (filter += `,('date_livraison','>=',${date_livraison.start}),('date_livraison','<=', ${date_livraison.end})`); // available reverse values : 0 or 1
  isType_commande && (filter += `,('type_commande','like','${type_commande}')`);
  return sorted && reverse ? { filter, sorted, reverse } : { filter };
};

export const criteriaToString = (filter: DevisFilter): string => {
  let filterString = "";
  filter.sortBy &&
    (filterString += extractLabelOptions(filter.sortBy, devisSortBy) + "; ");
  filter.year && (filterString += filter.year + "; ");
  filter.month && (filterString += valueToMonth(filter.month) + "; ");
  filter.codeDevis && (filterString += filter.codeDevis + "; ");
  filter.refCli && (filter.refCli += valueToMonth(filter.month) + "; ");
  return filterString;
};
