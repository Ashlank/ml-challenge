'use client'

import { TreeCategory } from "@/types/types"
import Link from "next/link";
import { useState } from "react"

export function ItemList({ categories, parentId = null }: { categories: TreeCategory[], parentId?: string | null}) {
  const categoriesToRender = categories.filter(cat => cat.parentId === parentId)

  if(categoriesToRender.length === 0) return null;

  return (
    <ul>
      {
        categoriesToRender.map((category) => {
          return (
            <li key={category.id} className="pl-6 mb-2">
              <Item category={category} categories={categories}/>
            </li>
          )
        })
      }
    </ul>
  )
}

export function Item({ category, categories }: { category: TreeCategory, categories: TreeCategory[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildrens = categories.filter(cat => cat.parentId === category.id)

  return (
    <ul className="my-2">
      { hasChildrens.length > 1 &&
        <button className="w-3 mr-1" onClick={() => setIsOpen((prev) => !prev)}>
          {
            isOpen ? '-' : '+'
          }
        </button>
      }
      <Link href={`/${category.id}`} className={`${hasChildrens.length <= 1 ? 'ml-4' : ''}`}>
        {category.name}
      </Link>
      {
        isOpen && hasChildrens.length > 1 && <ItemList categories={categories} parentId={category.id}/>
      }
    </ul>
  )
}
