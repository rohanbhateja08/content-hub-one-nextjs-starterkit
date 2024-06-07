import { MediaResults } from "./media-type"
import { JSONContent } from "@tiptap/core";

type PromoBlock = {
    promoTitle: string
    id: string
    Name: string
    promoDescription: string
    promoImage: MediaResults
}
export default PromoBlock

export type PromoBlockResults = {
    total: string;
    results: PromoBlock[];
}