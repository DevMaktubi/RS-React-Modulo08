import { List, ListRowRenderer } from "react-virtualized";
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
  totalPrice: number;
};

export function SearchResults({
  results,
  onAddToWishList,
  totalPrice,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  return (
    <div>
      Total: {totalPrice}
      {/* @ts-ignore */}
      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
      {/* {results.map((result) => {
        return (
          <ProductItem
            key={result.id}
            product={result}
            onAddToWishList={onAddToWishList}
          />
        );
      })} */}
    </div>
  );
}
