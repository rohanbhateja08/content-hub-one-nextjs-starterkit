import { MediaResults } from "../Common/media-type"
import { RecipeResults } from "../Recipe/recipe-type"
import { FooterResults } from "./footer-type"
import { HeaderResults } from "./header-type"
import { PromoBlockResults } from "../Common/blanko-promo-type"


type Homepage = {
  id: string
  name: string
  header: HeaderResults
  heroBanner: MediaResults
  recipeTitle: string
  recipeSectionText: string
  recipes: RecipeResults
  footer: FooterResults
  blankoPromo: PromoBlockResults
}
export default Homepage

export type HomepageResults = {
  total: string;
  results: Homepage[];
}