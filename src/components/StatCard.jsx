// A simple, reusable component that displays a label and value
// Used in the BlocInfo panel to show GDP, Population, Founded, and Members

import React from 'react';

/**
 * StatCard Component
 * 
 * @param {string} label - The name of the stat (e.g., "GDP", "Population")
 * @param {string} value - The value to display (e.g., "17.9 trillion USD")
 * @param {boolean} showBorder - Whether to show a right border (true for first 3 cards, false for last)
 */
function StatCard({ label, value, showBorder }) {
  return (
    <div 
      style={{ 
        padding: '15px',
        // Only show border if showBorder is true
        borderRight: showBorder ? '1px solid #333' : 'none'
      }}
    >
      {/* Label - small gray text */}
      <div style={{ 
        fontSize: '14px', 
        color: '#999', 
        marginBottom: '8px' 
      }}>
        {label}:
      </div>
      
      {/* Value - large bold white text */}
      <div style={{ 
        fontSize: '20px', 
        fontWeight: 'bold',
        color: 'white'
      }}>
        {value}
      </div>
    </div>
  );
}

export default StatCard;