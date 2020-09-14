export interface HomeState {
  refCode?: string;
  commercialContact?: Contact;
  advContact?: Contact;
  delaisProduit?: DelaisProduit;
  accountAddress?: AccountAddress;
  contact?: Contact;
}

export interface AccountAddress {
  code: string;
  name: string;
  address1: string;
  address2: string;
  codePostal: string;
  city: string;
  tel: string;
  email: string;
}

export interface Contact {
  email?: string;
  phone?: string;
  name?: string;
}

export interface DelaisProduit {
  doc_name: string;
  doc_base64: string;
}

export interface HomeDto {
  ref_code: string;
  user_email: string;
  user_name: string;
  user_phone: string;
  adv_email: string;
  adv_name: string;
  adv_phone: string;
  name: string;
  street: string;
  street2: string;
  zip: string;
  city: string;
  phone: string;
  email: string;
  partner_user_name: string;
  partner_user_email: string;
}

export interface DelaisProduitDto {
  documents: Array<DelaisProduit>;
}
