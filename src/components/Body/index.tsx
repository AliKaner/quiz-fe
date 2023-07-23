import React from 'react';

export function Body(props: React.PropsWithChildren<unknown>) {
  return (
    <div className="flex flex-col items-center justify-center">
      {props.children}
    </div>
  );
}
