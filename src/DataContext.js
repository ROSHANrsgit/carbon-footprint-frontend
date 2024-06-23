// DataContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const sendData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, sendData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to consume the context
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
