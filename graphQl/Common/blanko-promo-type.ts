import MEDIA_QUERY from "./media-query";

export const PROMO_QUERY = `
      id
      name
      promoTitle
      promoDescription
      promoImage {
        total
        results{
            ${MEDIA_QUERY}
        }
    }
  `;

export default PROMO_QUERY

