import React from 'react';

export function Header(props: React.PropsWithChildren<unknown>) {
    return (
        <div className='flex flex-row'>
            {props.children}
        </div>
    );
}