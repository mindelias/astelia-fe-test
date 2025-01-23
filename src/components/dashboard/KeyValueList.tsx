import React from "react";

export function DescriptionPanel() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
      {/* Description Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Description</h2>
        <p className="text-sm text-gray-600">
          Lorem Ipsum Dolor Sit Amet Consectetur. Aenean Sodales Pellentesque
          Gravida Nibh Et Magna Faucibus. Duis Commodo Ut Metus Amet Egestas
          Habitant Viverra.
        </p>
      </div>

      {/* Extra Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Extra</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames
          egestas tellus dis pretium tempus.
        </p>
      </div>

      {/* Key-Value List */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Details</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex justify-between">
            <span>Lorem Ipsum Dolor</span>
            <span>10/19/2017</span>
          </li>
          <li className="flex justify-between">
            <span>Lorem Ipsum Dolor</span>
            <span>Ut</span>
          </li>
          <li className="flex justify-between">
            <span>Lorem Ipsum Dolor</span>
            <span>Eros</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
