import axios from "axios";
import React from "react";
import useinstance from "../../Hooks/useAxios";

const CreateaProduct = () => {

    const axiosinstance = useinstance();
    const handleproductadd = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const min_price = e.target.price_min.value;
        const price_max = e.target.price_min.value;
        const product_img = e.target.image.value;

        console.log(title, min_price, price_max, product_img);

        const newproductdetails = {
            title: title,
            price_min: min_price,
            price_max: price_max,
            image: product_img,
        }

        /* axios.post('http://localhost:3000/products',productdetails)
        .then(data => {
            console.log(data)

            if(data.data.insertedId){
                alert("your beem created succesflly!!")
            }
        }) */

        axiosinstance.post('/products',newproductdetails)
        .then(data => console.log(data.data));

    }


  return (
    <div className="max-w-5/12 m-auto my-6">
        <div className="my-6 text-center font-bold text-3xl">
            <h3>Add a New Product</h3>

        </div>
      <form onSubmit={handleproductadd} className="space-y-4">
        {/* Product Title */}
        <div>
          <label className="block text-gray-700 mb-1">Product Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Sample Product 14"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Price Range */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Price (Min)</label>
            <input
              type="number"
              name="price_min"
              placeholder="e.g. 19000"
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Price (Max)</label>
            <input
              type="number"
              name="price_max"
              placeholder="e.g. 20000"
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 mb-1">Category</label>
          <input
            type="text"
            name="category"
            placeholder="e.g. Electronics"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 mb-1">Location</label>
          <input
            type="text"
            name="location"
            placeholder="e.g. Dhaka"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Product Image URL */}
        <div>
          <label className="block text-gray-700 mb-1">Product Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="https://i.ibb.co/sampleproduct14.jpg"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Condition */}
        <div>
          <label className="block text-gray-700 mb-1">Condition</label>
          <select
            name="condition"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="fresh">Fresh</option>
            <option value="used">Used</option>
            <option value="refurbished">Refurbished</option>
          </select>
        </div>

        {/* Usage */}
        <div>
          <label className="block text-gray-700 mb-1">Usage</label>
          <input
            type="text"
            name="usage"
            placeholder="e.g. 14 months old"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Write a short product description..."
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Seller Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Seller Name</label>
            <input
              type="text"
              name="seller_name"
              placeholder="e.g. Seller 14"
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Seller Email</label>
            <input
              type="email"
              name="email"
              placeholder="seller14@example.com"
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Seller Contact */}
        <div>
          <label className="block text-gray-700 mb-1">Seller Contact</label>
          <input
            type="text"
            name="seller_contact"
            placeholder="+8801711000014"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-all"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateaProduct;
