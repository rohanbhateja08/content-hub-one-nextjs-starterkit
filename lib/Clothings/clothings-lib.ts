import { fetchAPI } from "../Common/api"
import Clothing, { ClothingResults } from "../../types/Clothings/clothings-type";
import { CLOTHING_QUERY, ALL_CLOTHING_QUERY } from "../../graphQl/Clothings/clothings-query";

export async function getAllClothings(preview: boolean): Promise<Clothing[]> {
  const data = await fetchAPI(`${ALL_CLOTHING_QUERY}`);

  return extractClothings(data.data);
}

export async function getClothingById(id: string): Promise<Clothing> {

  const queryClothing = `{ 
    data: blankoClothing(id: "${id}")
    {
        ${CLOTHING_QUERY}
    }
  }`;

  const data = await fetchAPI(queryClothing);
  console.log(data);
  return data.data.data;
}

export async function getAllClothingWithIds(): Promise<Clothing[]> {
  const query = `{ 
    data: allBlankoClothing
    {
      __typename
      total
      results {
        ${CLOTHING_QUERY}
      }
    }
  }`;

  const data = await fetchAPI(query);
  return extractClothings(data.data);

}

function extractClothings({ data }: { data: ClothingResults }) {

  return data.results.map((post: Clothing) => {
    return post;
  });
}

function extractClothing({ data }: { data: Clothing }) {
  return data;
}

