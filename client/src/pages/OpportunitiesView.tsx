import React from 'react';
import { Target, ArrowRight } from 'lucide-react';

const OpportunitiesView = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Identified Opportunities</h2>
        <p className="text-gray-600 mt-2">Based on analyzed insights and market research</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-blue-600" />
            <h3 className="text-lg font-semibold">Bio-based Frame Materials</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Develop frames using sustainable bio-based polymers with comparable durability to traditional materials.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ArrowRight size={16} className="text-green-500" />
              <span>Market size: $2.5B by 2025</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ArrowRight size={16} className="text-green-500" />
              <span>Low competition in premium segment</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-blue-600" />
            <h3 className="text-lg font-semibold">Recycled Lens Technology</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Innovative lens manufacturing process using recycled materials while maintaining optical clarity.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ArrowRight size={16} className="text-green-500" />
              <span>Patent opportunity identified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ArrowRight size={16} className="text-green-500" />
              <span>First-mover advantage potential</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-blue-600" />
            <h3 className="text-lg font-semibold">Circular Economy Program</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Implement a take-back program for end-of-life eyewear to support material recycling.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ArrowRight size={16} className="text-green-500" />
              <span>Brand differentiation opportunity</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ArrowRight size={16} className="text-green-500" />
              <span>Government incentives available</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-blue-600" />
            <h3 className="text-lg font-semibold">Green Packaging Solution</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Redesign product packaging using biodegradable materials and minimal waste approach.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ArrowRight size={16} className="text-green-500" />
              <span>Immediate implementation possible</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ArrowRight size={16} className="text-green-500" />
              <span>Strong consumer demand signal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesView;
