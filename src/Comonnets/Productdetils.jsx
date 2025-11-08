import React, { useContext, useEffect, useRef, useState } from "react";
import { data, useLoaderData } from "react-router";
import Authcontext from "../Authcontext/Authcontext";
import Swal from "sweetalert2";
import axios from 'axios';
import Bidlistforeachproduct from "./Bidlistforeachproduct";


const Productdetils = () => {
  const { user } = useContext(Authcontext);
  const refmodal = useRef(null);
  const product = useLoaderData();
  console.log(product);
  const [bid,  setBid] = useState([])
 console.log(bid);


  const {
    image,
    location,
    title,
    condition,
    usage,
    description,
    price_min,
    _id,
    category,
    price_max,
    created_at,
    seller_image,
    seller_name,
    email,
    seller_contact,
  } = product;


  
  useEffect(() => {
   axios.get(`http://localhost:3000/product/bid/${_id}`)
   .then(data => console.log(data.data))
   setBid(data.data);
  }, [_id])


  const hadnlemodalbid = () => {
    refmodal.current.showModal();
  };

  const hadnlebidssubmit = (e) => {
    e.preventDefault();
    const buyername = e.target.buyerName.value;
    const buyerEmail = e.target.buyerEmail.value;
    const buyerImage = e.target.buyerImage.value;
    const bid_price = e.target.price.value;

    console.log(_id, buyername, buyerEmail, buyerImage, bid_price);

    const newbid = {
      product: _id,
      buyer_name: buyername,
      bhuyer_emai: buyerEmail,
      bhuyer_image: buyerImage,
      bid_price: bid_price,
    };

    fetch("http://localhost:3000/bids02", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newbid),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
         newbid._id = data.insertedId;
         setBid([...bid, newbid])
          refmodal.current.close();
          Swal.fire({
            title: "your bid completed",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div>
      <h3>this is prouct detils page</h3>
      <div>
        {/* product detils here */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden grid md:grid-cols-2 gap-6 p-6">
          {/* Left Section - Image / Description */}
          <div className="space-y-4">
            <div className="w-full h-56 bg-gray-200 rounded-xl overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">
                Product Description
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <p>
                  <span className="font-medium text-gray-800">Condition:</span>{" "}
                  {condition}
                </p>
                <p>
                  <span className="font-medium text-gray-800">Usage Time:</span>{" "}
                  {usage}
                </p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            <p className="text-green-600 text-xl font-semibold">
              ${price_min} - ${price_max}
            </p>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">
                Product Details
              </h3>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">Product ID:</span>{" "}
                {_id}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">Category:</span>{" "}
                {category}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">Posted:</span>{" "}
                {new Date(created_at).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">
                Seller Information
              </h3>
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={seller_image}
                  alt={seller_name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800">{seller_name}</p>
                  <p className="text-sm text-gray-500">{email}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">Location:</span>{" "}
                {location}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">Contact:</span>{" "}
                {seller_contact}
              </p>
              <p className="text-sm mt-2">
                <span className="font-medium text-gray-800">Status:</span>{" "}
                <span
                  className={`font-semibold px-2 py-1 rounded-full text-xs ${
                    status === "available"
                      ? "bg-green-100 text-green-700"
                      : status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {status}
                </span>
              </p>
            </div>

            <button
              onClick={hadnlemodalbid}
              className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition"
            >
              I Want Buy This Product
            </button>
          </div>
        </div>

        <dialog ref={refmodal} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md p-6 space-y-5">
              <h2 className="text-xl font-semibold text-center text-gray-800">
                Give Seller Your Offered Price
              </h2>

              <form onSubmit={hadnlebidssubmit} className="space-y-5">
                {/* Buyer Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Buyer Name
                    </label>
                    <input
                      type="text"
                      name="buyerName"
                      readOnly
                      defaultValue={user.displayName}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Buyer Email
                    </label>
                    <input
                      type="email"
                      name="buyerEmail"
                      readOnly
                      defaultValue={user?.email}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                </div>

                {/* Buyer Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Buyer Image URL
                  </label>
                  <input
                    type="url"
                    name="buyerImage"
                    readOnly
                    defaultValue={user?.photoURL}
                    placeholder="https://...your_img_url"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Place your Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Place your Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="e.g. Artisan Roasters"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                {/* Contact Info */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Info
                  </label>
                  <input
                    type="text"
                    name="contact"
                    placeholder="e.g. +1-555-1234"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-3 pt-3">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    Submit Bid
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        {/* modal ends here */}

        <div className="max-w-7/12 m-auto  mt-10">
          <div className="bg-gray-100 text-gray-700 uppercase text-xs font-semibold shadow-sm rounded-t-lg">
            <div className="grid grid-cols-5 text-left py-3 px-4 border-b">
              <div>SL No</div>
              <div>Product</div>
              <div>Seller</div>
              <div>Bid Price</div>
              <div>Actions</div>
            </div>
          </div>
         <div>
            {
                bid.map((bid, index) => <Bidlistforeachproduct index={index} bid={bid} ></Bidlistforeachproduct>)
            }
         </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetils;
