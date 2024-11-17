import { Products } from "@/views/products";
import { Suspense } from "react";

export default function ProductsRoot() {
  return <Suspense fallback="...loading"><Products /></Suspense> ;
}
