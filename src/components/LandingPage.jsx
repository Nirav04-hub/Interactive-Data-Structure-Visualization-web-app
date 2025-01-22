import React from "react";

const LandingPage = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">
        Interactive Data Structure Visualization
      </h1>
      <p className="mb-6">
        Select a data structure from the dropdown to visualize its operations.
      </p>
      <select className="p-2 border rounded w-64">
        <option value="">Select Data Structure</option>
        {/* Linear Data Structures */}
        <optgroup label="Linear Data Structures">
          <option value="array">Array</option>
          <option value="linked-list">Linked List</option>
          <option value="stack">Stack</option>
          <option value="queue">Queue</option>
          <option value="deque">Deque</option>
        </optgroup>
        {/* Non-Linear Data Structures */}
        <optgroup label="Non-Linear Data Structures">
          <option value="binary-tree">Binary Tree</option>
          <option value="binary-search-tree">Binary Search Tree</option>
          <option value="heap">Heap</option>
          <option value="graph">Graph</option>
          <option value="trie">Trie</option>
        </optgroup>
        {/* Hashing Data Structures */}
        <optgroup label="Hashing Data Structures">
          <option value="hash-table">Hash Table</option>
          <option value="hash-set">Hash Set</option>
          <option value="hash-map">Hash Map</option>
        </optgroup>
      </select>
    </div>
  );
};

export default LandingPage;
