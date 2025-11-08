import React, { useContext, useEffect, useState } from "react";
import Authcontext from "../Authcontext/Authcontext";

const Mybids = () => {
  const [mybid, setMybid] = useState([]);

  const { user } = useContext(Authcontext);

  // console.log(user.accessToken);
  useEffect(() => {
  if (!user?.email || !user?.accessToken) return; // 🔒 safe check

  fetch(`http://localhost:3000/bids?email=${user.email}`, {
    headers: {
      authorization: `Bearer ${user.accessToken}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMybid(data);
    });
}, [user?.email, user?.accessToken]);


  const handleremovebid = (id) => {
    fetch(`http://localhost:3000/bids/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remingingbid = mybid.filter((bid) => bid._id === id);
          setMybid(remingingbid);
        }
      });
  };

  //   console.log(mybid);

  return (
    <div className="text-center">
      <h1>here is my bids page beda !!</h1>

      <div>
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
            {mybid.map((bid, index) => (
              <div>
                <div>
                  <div className="p-6">
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                      <table className="min-w-full text-sm text-left border-collapse">
                        <tbody>
                          <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b">{index + 1}</td>

                            <td className="py-3 px-4 border-b flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                              <div>
                                <p className="font-medium text-gray-800">
                                  Orange Juice
                                </p>
                                <p className="text-gray-500 text-xs">$22.5</p>
                              </div>
                            </td>

                            <td className="py-3 px-4 border-b">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-300">
                                  <img src={bid.bhuyer_image} alt="" />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-800">
                                    Sara Chen
                                  </p>
                                  <p className="text-gray-500 text-xs">
                                    crafts.by.sara@shop.net
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td className="py-3 px-4 border-b font-semibold">
                              ${bid.bid_price}
                            </td>

                            <td className="py-3 px-4 border-b">
                              <div className="flex gap-2">
                                <button className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition">
                                  Accept Offer
                                </button>
                                <button
                                  onClick={() => handleremovebid(bid._id)}
                                  className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition"
                                >
                                  Reject Offer
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mybids;
