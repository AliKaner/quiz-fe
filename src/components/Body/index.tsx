import React from 'react';

export function Body(props: React.PropsWithChildren<unknown>) {
    return (
        <div className='flex flex-col h-full w-full items-center bg-primary'>
            {props.children}
        </div>
    );
}