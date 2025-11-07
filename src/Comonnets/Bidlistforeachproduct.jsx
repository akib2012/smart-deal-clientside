import React from "react";

const Bidlistforeachproduct = ({ bid, index }) => {
  return (
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
                      <p className="font-medium text-gray-800">Orange Juice</p>
                      <p className="text-gray-500 text-xs">$22.5</p>
                    </div>
                  </td>

                  <td className="py-3 px-4 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300"><img src={bid.bhuyer_image} alt="" /></div>
                      <div>
                        <p className="font-medium text-gray-800">Sara Chen</p>
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
                      <button className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition">
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
  );
};

export default Bidlistforeachproduct;
