import React from "react";
import { Link } from "react-router";

const Letesproduct = ({product}) => {
  const { _id, image, title, price_min, price_max, status } = product;
  return (
    <div>
      <div className="w-full bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-5 space-y-3">
          <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
            {title}
          </h2>

          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm">
              Price:{" "}
              <span className="font-medium text-gray-800">
                ${price_min} - ${price_max}
              </span>
            </p>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                status === "available"
                  ? "bg-green-100 text-green-700"
                  : status === "sold"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {status}
            </span>
          </div>

          <Link to={`/productdetsils/${_id}`}>
            <button className="w-full mt-2 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-all">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Letesproduct;
