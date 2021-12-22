import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  return <div className="PageError"><span role="img" aria-label="x emoji">❌</span>{props.error.message}<span role="img" aria-label="screaming emoji">😱</span></div>;
}

export default PageError;
