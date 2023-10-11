import getProducts from "@/api/getProducts"
import ProductsList from "../components/ProductsList";

export default async function page({ params: { category_id } }: { params: { category_id: string }}) {
  const products = await getProducts(category_id);

  return (
    <ProductsList category={category_id}/>
  )
}