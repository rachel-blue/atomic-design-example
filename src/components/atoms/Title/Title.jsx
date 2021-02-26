import React, {useCallback} from 'react';
import './Title.css';

const Title = ({size, children}) => {
  const printTitle = useCallback(() => {
    if (size === 2) {
      return <h2 className="a-title-one">{children}</h2>
    } else if (size === 5) {
      return <h5>{children}</h5>
    }

    return <h1>{children}</h1>
  }, [size, children]);

  return (
    <>
      {printTitle()}
    </>
  );
};

export default Title;
