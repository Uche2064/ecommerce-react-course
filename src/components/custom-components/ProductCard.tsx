import type { Product } from "@/data/products";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ShoppingBag } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-xl bg-base-100 p-5 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-col gap-4">
        {/* image */}
        <div className="relative overflow-hidden rounded-lg bg-gray-100/50">
          <img
            src={product.image}
            alt={product.title}
            className="h-50 w-full object-contain transition-transform group-hover:scale-105"
          />
          <Badge className="absolute z-100 top-2 right-2 bg-amber-400 font-bold">
            {product.rating.rate}
          </Badge>
        </div>

        {/* title */}
        <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>

        {/* description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* price */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-primary">
            ${product.price}
          </span>

          <div className="flex items-center gap-2">
            <Button className="" size={"sm"}>
              Add to cart
              <ShoppingBag />
            </Button>
            <Button variant={"outline"} size={"sm"}>
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
