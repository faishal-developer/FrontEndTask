import { useState, useMemo, useCallback, useEffect } from "react";
import { PaginationConfig, PaginationResult } from "@/types";
import { calculateTotalPages } from "@/utils/pagination/calculateTotalPages";
import { getPaginatedItems } from "@/utils/pagination/getPaginatedItems";
import { getNextPage } from "@/utils/pagination/getNextPage";
import { useRouter, useSearchParams } from "next/navigation";

export const usePagination = <T>({
  items,
  itemsPerPage,
  initialPage = 1,
}: PaginationConfig<T>): PaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const router = useRouter();
  const searchParams = useSearchParams(); // Access query parameters

  const urlPage = searchParams.get('page');

  const totalPages = useMemo(
    () => calculateTotalPages(items.length, itemsPerPage),
    [items, itemsPerPage]
  );

  const paginatedItems = useMemo(
    () => getPaginatedItems(items, currentPage, itemsPerPage),
    [items, currentPage, itemsPerPage]
  );

  const handlePageChange = useCallback(
    (direction: "next" | "prev") => {
      console.log()
      setCurrentPage((prevPage) =>
        getNextPage(prevPage, direction, totalPages)
      );

    },
    
    [totalPages]
  );

  useEffect(()=>{
      if(urlPage){
        setCurrentPage(Number(urlPage))
      }else{
        setCurrentPage(1)
      }
  },[])

  useEffect(()=>{
    router.push(`${window.location.pathname}?page=${currentPage}`);

  },[currentPage])

  return {
    currentPage,
    totalPages,
    paginatedItems,
    handlePageChange,
  };
};
