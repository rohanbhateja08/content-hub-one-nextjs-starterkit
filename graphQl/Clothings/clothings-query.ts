export const CLOTHING_QUERY = ` 
  id
  productName
  name
  description
`;

export const ALL_CLOTHING_QUERY = `{ 
    data: allBlankoClothing
    {
      __typename
      total
      results {
        ${CLOTHING_QUERY}
      }
    }
  }
  `;

export default ALL_CLOTHING_QUERY

