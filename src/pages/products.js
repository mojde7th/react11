import { useEffect } from "react";
import useAsync from "../hooks/useAsync";
import { navbarLinks } from "../libs/constants";
import Skeleton from "../components/skeleton";
import ProductComponent from "../components/ProductComponent";

function ProductsPage() {
  const { loading, data, error, getData } = useAsync("Products");
  useEffect(() => {
    getData();
    setTimeout(() => {
      console.log("Mydata:", data);
    }, 3000);
  }, []);

  if (loading)
    return (
      <div className="flex gap-4 flex-wrap justify-between my-4 mx-7">
        {Array.from(Array(20)).map((item) => (
          <Skeleton key={item} />
        ))}
      </div>
    );
  console.log(data?.data);
  return (
    <div className="flex flex-wrap justify-around ">
      {data?.data?.map((item) => {
        return <ProductComponent {...item} key={item.id} />;
      })}
    </div>
  );
}

export default ProductsPage;
