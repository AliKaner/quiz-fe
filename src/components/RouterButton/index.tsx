import { NextRouter, useRouter } from 'next/router';

export function PathButton({ path, text }: { path: string; text: string; }) {
    const router = useRouter();
    return (
        <div onClick={() => router.push(path)} className='bg-secondary p-4 flex-1 shadow-xl hover:shadow-2xl hover:shadow-white border-white text-white text-8xl'>
            {text}
        </div>
    )
}