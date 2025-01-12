// ErrorContext.js
import { createContext, useState, useContext } from 'react';

const ErrorContext = createContext();

export const useError = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const handleError = (message) => {
    setError(message);
  }
  const clearError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, handleError, clearError }}>
      {error &&
        <div
          className="font-bold bg-red-400 text-white text-center"
          role="alert"
        >{error}</div>}
      {children}
    </ErrorContext.Provider>
  );
};