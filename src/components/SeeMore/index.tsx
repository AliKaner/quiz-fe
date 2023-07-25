import { NextRouter, useRouter } from 'next/router';

export function SeeMore({ path }: { path: string }) {
    const router = useRouter();
    return (
        <div onClick={() => router.push(path)} className='text-white ml-2'>
            See More &gt;&gt;
        </div>
    )
}