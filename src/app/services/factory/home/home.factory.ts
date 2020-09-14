import {
  HomeState,
  HomeDto,
  DelaisProduitDto,
} from "./../../../data/models/home.model";

export const homeFactory = (homeDto: HomeDto): HomeState => {
  return {
    refCode: homeDto.ref_code,
    commercialContact: {
      phone: homeDto.user_phone,
      email: homeDto.user_email,
      name: homeDto.user_name,
    },
    advContact: {
      phone: homeDto.adv_phone,
      email: homeDto.adv_email,
      name: homeDto.adv_name,
    },
    accountAddress: {
      code: homeDto.ref_code,
      name: homeDto.name,
      address1: homeDto.street,
      address2: homeDto.street2,
      codePostal: homeDto.zip,
      city: homeDto.city,
      tel: homeDto.phone,
      email: homeDto.email,
    },
    contact: {
      name: homeDto.partner_user_name,
      email: homeDto.partner_user_email,
    },
  };
};

export const delaisProduitFactory = (
  delaisProduitDto: DelaisProduitDto
): HomeState => {
  const { doc_name, doc_base64 } = delaisProduitDto.documents[0];
  return {
    delaisProduit: {
      doc_name,
      doc_base64,
    },
  };
};
