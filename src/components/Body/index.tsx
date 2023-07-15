import React from 'react';

export function Body(props: React.PropsWithChildren<unknown>) {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center gap-4">
      {props.children}
    </div>
  );
}
