import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAddProduct from "../hooks/GetSimilarproduct";

function ProductDetail() {
  const data = useParams();
  const {
    GetSimilarproduct,
    GetSinglePro,
    data2,
    data3,
    error2,
    error3,
    loading3,
    loading2,
  } = useAddProduct();

  useEffect(() => {
    GetSimilarproduct(`${data.productId}`);
    GetSinglePro(`${data.productId}`);
    console.log("data2", data2);
  }, []);
  console.log(data);
  if (loading2 || loading3) return <div>Loadinnng2 .....</div>
  else
  return (
    <div className="flex w-[100%] flex-col  md:flex-row   mx-auto justify-evenly align-middle">
      <div withBorder className="md:w-[40%]  w-[100%]">
        <div className="card mx-auto w-[90%] my-10 bg-base-100 shadow-xl">
          <div className="card-body">
            Hello from Product Detail number {`${data?.productId}`}
            <br />
            {console.log("dataaaa2", data2?.images?.[1])}
            {data2?.title}
            {data2?.description}
            <img
              className="w-40 mx-auto my-10"
              src={
                data2?.images?.[0] ||
                data2?.images?.[1] ||
                data2?.images?.[2] ||
                ""
              }
              alt=""
            />
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary "
                onClick={() => {
                  // navig(`/products/${id}`);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div withBorder className=" w-[100%]   md:w-[40%] ">
        <div className="card mx-auto w-[90%] my-10 bg-base-100 shadow-xl">
          <div className="card-body">
            Hello from Product Detail number {`${data?.productId}`}
            <br />
            {console.log("dataaaa3", data3)}
            {data3?.title}
            {data3?.description}
            <img
              className="w-40 mx-auto"
              src={
                data3?.image || data3?.images?.[1] || data3?.images?.[2] || ""
              }
              alt=""
            />
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  // navig(`/products/${id}`);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
