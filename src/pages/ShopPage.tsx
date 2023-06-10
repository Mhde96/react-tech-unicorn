import { Col, Row } from "react-bootstrap";
import { useCategoriesApi } from "../apis/getCategories";
import { useProductsByCategoryApi } from "../apis/getProductsByCategory";
import { Product } from "../components/prpduct/Product";
import { ProductSlideSection } from "../sections/arrival/ArrivalSection";
import { DiscountSection } from "./home/sections/DiscountSection";
import { CarouselSectionHome } from "./home/sections/carousel/CarouselSectionHome";
import { CategoriesList } from "../components/category/CategoriesList";
import { ProductList } from "../components/product-list/ProductList";
import { useState } from "react";

export const ShopPage = () => {
  const [selectCategories, setSelectCategory] = useState(null);

  return (
    <div>
      <DiscountSection />
      <CarouselSectionHome />

      <CategoriesList
        selectCategories={selectCategories}
        setSelectCategory={setSelectCategory}
      />
      <ProductList category={selectCategories} />
    </div>
  );
};
