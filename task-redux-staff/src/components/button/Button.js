import React from 'react';

const Button = (props) => {
  const { Click, children } = props;
  return (
    <div>
        <dutton onClick={(event) => Click(event)}>{children}</dutton>
    </div>
  );
}

export default Button;
