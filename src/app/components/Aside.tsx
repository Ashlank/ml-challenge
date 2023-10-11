import getCategories from "@/api/getCategories";
import categoriesTree from "@/utils/categoriesTree";
import { ItemList } from "./ItemList";

export default async function Aside() {
  const categories = await getCategories();
  const categoryTree = categoriesTree(categories)

  return (
    <aside className="bg-blue-600 text-sm">
      <section className="sticky top-[66px]">
        <ItemList categories={categoryTree} />
      </section>
    </aside>
  )
}

