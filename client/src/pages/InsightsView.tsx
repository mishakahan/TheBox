import React from 'react';
import { ChevronDown } from 'lucide-react';

const InsightsView = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Project Insights</h2>
        <p className="text-gray-600 mt-2">Eco-Friendly Materials Development for FLiPO Eyewear</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Market Trends</h3>
            <ChevronDown className="text-gray-500" />
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Sustainable Materials Adoption</h4>
              <p className="text-gray-600 mt-2">
                Growing consumer preference for eco-friendly eyewear materials, with 65% willing to pay premium for sustainable options.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Circular Economy Impact</h4>
              <p className="text-gray-600 mt-2">
                Increasing focus on recyclable and biodegradable materials in eyewear manufacturing, driving innovation in material science.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Technical Analysis</h3>
            <ChevronDown className="text-gray-500" />
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Material Properties</h4>
              <p className="text-gray-600 mt-2">
                Bio-based polymers showing promising durability metrics while maintaining optical clarity requirements.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium">Manufacturing Feasibility</h4>
              <p className="text-gray-600 mt-2">
                New eco-friendly materials compatible with existing manufacturing processes, requiring minimal retooling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsView;
