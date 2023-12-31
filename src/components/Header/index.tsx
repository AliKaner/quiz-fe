import React from 'react';

export function Header(props: React.PropsWithChildren<unknown>) {
    return (
        <div className='flex flex-row w-full bg-white border-primary p-4'>
            {props.children}
        </div>
    );
}