import getProducts from "@/api/getProducts"
import { Category } from "@/types/types";

export default async function getCategories() {
  const products = await getProducts()
  const categoriesSet = new Set<string>();

  products.forEach((product) => {
    categoriesSet.add(product.category_id)
  })

  const categories = Array.from(categoriesSet)

  const promises: Promise<Category>[] = categories.map((category) => {
    return fetch(`https://api.mercadolibre.com/categories/${category}`).then(res => res.json())
  })

  return Promise.all(promises)
}

