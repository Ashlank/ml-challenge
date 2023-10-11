import { Product } from "@/types/types";

export default async function getProducts(category?: string): Promise<Product[]> {
  let url = "https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326"

  if(category) {
    url += `&category=${category}`;
  }

  const { results } = await fetch(url).then(res => res.json())

  if(!results) {
    throw new Error("Invalid response")
  }

  return results as Product[]
}