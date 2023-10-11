import numberToPrice from "@/utils/numberToPrice";
import getProducts from "@/api/getProducts";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/types";

interface ProductsListProps {
  category?: string;
}

export default async function ProductsList({ category }: ProductsListProps) {
  const products = await getProducts(category);

  return (
    <section className="flex flex-wrap justify-center items-center gap-8">
      {
        products.map((prod) => {
          return <ProductCard key={prod.id} prod={prod} />
        })
      }
    </section>
  )
}

export function ProductCard({ prod }: { prod: Product }) {
  return (
    <Link href={prod.permalink} target="_blank" rel="noopener noreferrer">
      <article className="w-80 h-80">
        <div className="w-full h-[80%]">
          <Image src={prod.thumbnail} alt={prod.title} className="w-full h-full" width={320} height={256} priority={true}/>
        </div>
        <p className="truncate p-2">{prod.title}</p>
        <span className="px-2 font-bold">{numberToPrice(prod.price, prod.currency_id)}</span>
      </article>
    </Link>
  )
}