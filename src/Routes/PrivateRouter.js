import React, { useContext } from 'react';
import { Navigate, useLocation, } from 'react-router-dom';
import { AuthContext } from '../Context/ContextProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()

  if (loading) {
    return <div className="flex items-center justify-center space-x-2 mt-10">
      <div className="w-4 h-4 rounded-full animate-pulse bg-green-800"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-green-600"></div>
      <div className="w-4 h-4 rounded-full animate-pulse bg-green-400"></div>
    </div>
  }
  if (user && user.uid) { return children }

  return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;