import Image from "next/image";
import { TBread } from "@/data/dummy-bread";
import Link from "next/link";

export default function ProductItems({ product }: { product: TBread }) {
  return (
    
      <Link href={`/products/${product.id}`}
        key={product.id}
        className="bg-[#2a1e14] rounded-lg shadow-lg overflow-hidden flex flex-col hover:[box-shadow:0_0_12px_rgba(217,160,102,0.8)] transition-all duration-300"
      >
        <div className="relative w-full h-56">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 p-4">
          <h3 className="text-[#f5e6d3] text-lg font-semibold mb-1">
            {product.name}
          </h3>
          <p className="text-[#e2c9a6] text-sm flex-1">{product.description}</p>

          <div className="mt-3 flex products-center justify-between">
            <span className="text-[#d9a066] font-bold text-lg">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-[#f5e6d3] text-sm">
              ⭐ {product.rating.toFixed(1)}
            </span>
          </div>

          <button
            className="mt-4 w-full py-2 rounded-lg 
                         bg-gradient-to-r from-[#d9a066] to-[#8b4513] 
                         text-white font-semibold
                         hover:from-[#e2ac6f] hover:to-[#9c5930]
                         hover:[box-shadow:0_0_12px_rgba(217,160,102,0.8)]
                         active:from-[#e2ac6f] active:to-[#9c5930]
                         active:[box-shadow:0_0_12px_rgba(217,160,102,0.8)]
                         transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </Link>
 
  );
}
