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
            <ul key={category.id} className="pl-6">
              <Item category={category} categories={categories}/>
            </ul>
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
    <li>
      { hasChildrens.length !== 0 &&
        <button className="w-3 mr-1" onClick={() => setIsOpen((prev) => !prev)}>
          {
            isOpen ? '-' : '+'
          }
        </button>
      }
      <Link href={`/${category.id}`} className={`${hasChildrens.length === 0 ? 'ml-4' : ''}`}>
        {category.name}
      </Link>
      {
        isOpen && <ItemList categories={categories} parentId={category.id}/>
      }
    </li>
  )
}
