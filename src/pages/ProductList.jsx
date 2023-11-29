import ProductPreview from "../components/ProductPreview";
import ProductService from "../models/services/productService.js";

function ProductList() {
  const data = ProductService.getProducts();
  return (
    <ul>
      {data.map((e) => (
        <li key={e.id}>
          <ProductPreview product={e} seeMore={false}></ProductPreview>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
