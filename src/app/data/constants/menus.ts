const menus = {
  home: {
    label: "Home",
    path: "/app/home",
    subMenus: [
      { label: "Mon compte", path: "home/account-address" },
      { label: "Adresses", path: "home/adresses" },
      { label: "Contacts", path: "home/contacts" },
      { label: "Discount", path: "home/discount" },
    ],
  },
  devis: {
    label: "Devis",
    path: "/app/devis",
  },
  commandes: {
    label: "Commandes",
    path: "/app/commandes",
  },
  counter: {
    label: "Counter",
    path: "/app/counter",
  },
};

export default menus;
