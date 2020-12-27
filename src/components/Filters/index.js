import React from 'react';
import ProductContext from 'context/ProductContext';
import { FiltersWrapper } from './styles';
import { CategoryFilterItems } from './CategoryFilterItem';

export function Filters() {
  const { collections } = React.useContext(ProductContext);
  return (
    <FiltersWrapper>
      <strong>Categories</strong>
      {collections.map(collection => (
        <CategoryFilterItems
          title={collection.title}
          key={collection.shopifyId}
          id={collection.shopifyId}
        />
      ))}
    </FiltersWrapper>
  );
}
