import { useState } from "react";
import { useCategoriesApi } from "../../apis/getCategories";

type CategoriesListPropsType = {
  selectCategories: string;
  setSelectCategory: (category: string) => void;
};
export const CategoriesList = (props: CategoriesListPropsType) => {
  const { selectCategories, setSelectCategory } = props;

  const categories = useCategoriesApi();

  const handleSelectCategory = (category: string) => {
    setSelectCategory(category);
  };
  return (
    <div className="d-flex gap-5">
      <div
        style={{
          color: selectCategories == null ? "orange" : "black",
        }}
        onClick={() => handleSelectCategory(null)}
      >
        {"All"}
      </div>
      {categories?.data?.map((category: any, index) => (
        <div
          onClick={() => handleSelectCategory(category)}
          key={index}
          style={{
            color: selectCategories == category ? "orange" : "black",
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};
