import React from "react";

const VisualizationPlaceholder = () => {
  return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold mb-4">Visualization Placeholder</h2>
      <p>
        This section will display visualizations for the selected data
        structure.
      </p>
      <div className="border-dashed border-2 border-gray-500 h-64 w-full flex justify-center items-center">
        <span className="text-gray-500">[Canvas or SVG will go here]</span>
      </div>
    </div>
  );
};

export default VisualizationPlaceholder;
