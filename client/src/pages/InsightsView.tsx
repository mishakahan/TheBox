import React, { useState } from 'react';
import { ChevronDown, Plus, Square, CheckSquare } from 'lucide-react';

const InsightsView = () => {
  // State for tracking selected cards in each section
  const [selectedCards, setSelectedCards] = useState({
    keyInsights: new Set([0, 1, 2, 3, 4]), // All key insights selected by default
    news: new Set(Array.from({ length: 10 }, (_, i) => i)), // 0-9 selected
    trends: new Set(Array.from({ length: 10 }, (_, i) => i)),
    customers: new Set(Array.from({ length: 10 }, (_, i) => i)),
    competitors: new Set(Array.from({ length: 10 }, (_, i) => i))
  });

  // State for tracking expanded sections
  const [expandedSections, setExpandedSections] = useState({
    keyInsights: false,
    news: false,
    trends: false,
    customers: false,
    competitors: false
  });

  const toggleCardSelection = (section: string, index: number) => {
    setSelectedCards(prev => {
      const newSet = new Set(prev[section]);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return { ...prev, [section]: newSet };
    });
  };

  const toggleSelectAll = (section: string, totalItems: number) => {
    setSelectedCards(prev => {
      const currentSet = prev[section];
      const newSet = new Set();
      if (currentSet.size < totalItems) {
        // Select all
        for (let i = 0; i < totalItems; i++) {
          newSet.add(i);
        }
      }
      return { ...prev, [section]: newSet };
    });
  };

  const toggleSectionExpand = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const keyInsights = Array(5).fill(null).map((_, index) => ({
    category: "Market Overview",
    title: `Key Insight ${index + 1}`,
    content: "Despite Germany being Europe's largest coffee consumer, there's a surprising surge in demand for herbal coffee alternatives. Health-conscious millennials are seeking the familiar coffee experience without caffeine's side effects.",
    sources: "Allied Market Research, Statista",
    impact: "Strong market potential for herbal coffee alternatives that maintain traditional coffee rituals."
  }));

  // Generate 10 items for each category
  const generateItems = (prefix: string) => Array(10).fill(null).map((_, index) => ({
    title: `${prefix} ${index + 1}`,
    content: `Sample content for ${prefix.toLowerCase()} item ${index + 1}. This provides valuable insights for the project.`,
    sources: "Market Research, Industry Reports",
    relevance: `Important implications for project development and strategy.`
  }));

  const categoryInsights = {
    news: generateItems("News Item"),
    trends: generateItems("Market Trend"),
    customers: generateItems("Customer Segment"),
    competitors: generateItems("Competitor Analysis")
  };

  const InsightSection = ({ title, insights, section }: { title: string, insights: any[], section: string }) => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold capitalize">{title}</h3>
        <button 
          onClick={() => toggleSelectAll(section, insights.length)}
          className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
        >
          {selectedCards[section].size === insights.length ? 'Deselect All' : 'Select All'}
        </button>
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-wrap gap-4 mb-4">
          {insights.slice(0, expandedSections[section] ? undefined : 3).map((insight, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm w-[300px] relative">
              <button
                onClick={() => toggleCardSelection(section, index)}
                className="absolute top-4 right-4"
              >
                {selectedCards[section].has(index) ? 
                  <CheckSquare className="w-5 h-5 text-blue-600" /> : 
                  <Square className="w-5 h-5 text-gray-400" />
                }
              </button>
              <h4 className="font-bold mb-2 pr-8">{insight.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{insight.content}</p>
              <p className="text-xs text-gray-500 mb-2">Sources: {insight.sources}</p>
              <p className="text-xs font-medium">Relevance: {insight.relevance}</p>
            </div>
          ))}
        </div>
        <button 
          onClick={() => toggleSectionExpand(section)}
          className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 mx-auto"
        >
          {expandedSections[section] ? 'Show Less' : 'View More'}
          <ChevronDown className={`transform transition-transform ${expandedSections[section] ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Insights</h1>

      {/* Project Summary */}
      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Challenge:</span> Development of a Flagship Herbal Coffee Alternative for the German Market
        </p>
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Description:</span> Create a unique product specifically for health-conscious millennials in Germany that combines local flavor inspiration with health benefits
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Constraints:</span> Target retail price €14 per pack, adapting to target segment consumer tastes, ensuring limited overlap with existing products
        </p>
      </div>

      {/* Key Insights Section with horizontal scroll */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Key Insights</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => toggleSelectAll('keyInsights', keyInsights.length)}
              className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
            >
              {selectedCards.keyInsights.size === keyInsights.length ? 'Deselect All' : 'Select All'}
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Generate Opportunities
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-x-auto">
            <div className="flex space-x-6 pb-4 min-w-full">
              {keyInsights.map((insight, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md w-[400px] shrink-0 relative">
                  <button
                    onClick={() => toggleCardSelection('keyInsights', index)}
                    className="absolute top-4 right-4"
                  >
                    {selectedCards.keyInsights.has(index) ? 
                      <CheckSquare className="w-5 h-5 text-blue-600" /> : 
                      <Square className="w-5 h-5 text-gray-400" />
                    }
                  </button>
                  <div className="text-sm text-blue-600 mb-2">{insight.category}</div>
                  <h3 className="font-bold mb-3 pr-8">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.content}</p>
                  <p className="text-sm text-gray-500 mb-2">Sources: {insight.sources}</p>
                  <p className="text-sm font-medium">Impact: {insight.impact}</p>
                </div>
              ))}
              <div className="bg-white p-6 rounded-lg shadow-md w-[400px] shrink-0 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors">
                <Plus className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-gray-600 font-medium">Add New Key Insight</p>
              </div>
            </div>
          </div>
        </div>
        <button 
          onClick={() => toggleSectionExpand('keyInsights')}
          className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 mx-auto"
        >
          {expandedSections.keyInsights ? 'Show Less' : 'View More'}
          <ChevronDown className={`transform transition-transform ${expandedSections.keyInsights ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Category Sections */}
      <InsightSection title="News" insights={categoryInsights.news} section="news" />
      <InsightSection title="Trends" insights={categoryInsights.trends} section="trends" />
      <InsightSection title="Customers" insights={categoryInsights.customers} section="customers" />
      <InsightSection title="Competitors" insights={categoryInsights.competitors} section="competitors" />

      {/* Bottom Generate Opportunities Button */}
      <div className="flex justify-center mt-8 mb-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Generate Opportunities
        </button>
      </div>
    </div>
  );
};

export default InsightsView;