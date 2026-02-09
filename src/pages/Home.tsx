import MainContent from "@/components/custom-components/MainContent";
import ProductCard from "@/components/custom-components/ProductCard";
import { Spinner } from "@/components/ui/spinner";
import { getProducts, type Product } from "@/data/products";
import { useEffect, useState } from "react";
export default function Home() {
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setIsLoadingProducts(false);
    });
  }, []);
  return (
    <>
      <MainContent>
        {/* Hero section */}
        <section className="py-15 px-10 bg-base-200 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-8 w-1/2">
              <h1 className="text-8xl font-bold wrap-break-word">
                Welcome to ShopHub
              </h1>
              <p className="text-gray-400 text-xl">
                ShopHub is a modern e-commerce platform that offers a wide range
                of products for customers to browse and purchase.
              </p>
            </div>
            {/* Hero image */}
            <div className="w-1/2">
              <img
                src="/shophub.png"
                alt="Hero image"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Products section */}
        <section className="py-15 px-10 bg-base-200 shadow-xl">
          <h2 className="text-2xl font-bold">Our Products</h2>
          {isLoadingProducts ? (
            <div className="flex items-center justify-center">
              <Spinner className="size-10" />
            </div>
          ) : (
           <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
             {products.map((product) => (
               <ProductCard key={product.id} product={product} />
             ))}
           </div>
          )}
        </section>
      </MainContent>
    </>
  );
}
