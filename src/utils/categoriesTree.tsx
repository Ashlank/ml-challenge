import { Category, TreeCategory } from "@/types/types";

export default function categoriesTree(allCategories: Category[]) {
  const categoriesTree = new Map()

  allCategories.forEach(( categories ) => {
    categories.path_from_root.forEach(( category, index ) => {
      categoriesTree.set(category.id ,{...category, parentId: categories.path_from_root[index-1]?.id || null})
    })
  })

  return Array.from<TreeCategory>(categoriesTree.values())
}