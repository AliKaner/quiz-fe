import React from 'react';

export function Layout(props: React.PropsWithChildren<unknown>) {
    return (
        <div className='flex flex-col h-screen w-screen bg-color-backgorund'>
            {props.children}
        </div>
    );
}