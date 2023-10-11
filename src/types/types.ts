export interface Product {
  id:                  string;
  title:               string;
  permalink:           string;
  catalog_product_id:  string;
  category_id:         string;
  thumbnail:           string;
  currency_id:         string;
  price:               number;
}

export interface Category extends Subcategory {
  path_from_root:               Subcategory[];
}

export interface Subcategory {
  id:                  string;
  name:                string;
}

export interface TreeCategory extends Subcategory{
  parentId:            string | null;
}