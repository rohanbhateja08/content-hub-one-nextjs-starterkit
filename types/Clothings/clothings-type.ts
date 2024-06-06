type Clothing = {
  id: string
  name: string
  productName: string
  description: string
}
export default Clothing

export type ClothingResults = {
  total: string;
  results: Clothing[];
}