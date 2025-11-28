import React from 'react';

const ProtectedRoute = ({ children }) => {
  return (
    <React.Fragment>{children}</React.Fragment>
  );
};

export default ProtectedRoute;
