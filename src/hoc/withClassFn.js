import React from 'react';

const withClassFn = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
      {/* spread operator so we can send all the props from Person component inside withClassFn component which takes Person as an argument */}
    </div>
  );
};

export default withClassFn;
