"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Product } from "@/types";
import { ProductModal } from "@/views/products/productModal/productModal";
import { BackToHome } from "@/components/backToHome/backToHome";
import { ProductList } from "@/views/products/productList/productList";
import { PaginationControls } from "@/views/products/paginationControls/paginationControls";
import { usePagination } from "@/hooks/usePagination";
import { PRODUCTS_DATA } from "@/data/productsData";
import { useRouter, useSearchParams } from "next/navigation";

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const {
    currentPage,
    totalPages,
    paginatedItems: paginatedProducts,
    handlePageChange,
  } = usePagination({ items: PRODUCTS_DATA, itemsPerPage: 5 });
  const router = useRouter();
  const searchParams = useSearchParams(); // Access query parameters


  const modal = searchParams.get('modal');
  const page = searchParams.get('page');

  useEffect(()=>{
    if(modal){
      let newSelected = paginatedProducts.find((item)=>item.id===modal)
      if(newSelected){
        setSelectedProduct(newSelected)
        router.push(`${window.location.pathname}?page=${page}&modal=${newSelected?.id}`);
      }
    }
  },[paginatedProducts])
  

  const handleOpenModal = (product: Product) => {
    router.push(`${window.location.pathname}?page=${page}&modal=${product?.id}`);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    router.push(`${window.location.pathname}?page=${page}`);
    setSelectedProduct(null);
  };


  return (
    <div>
      <BackToHome />
      <ProductList products={paginatedProducts} onOpenModal={handleOpenModal} />
      <div className="h-4" />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};
