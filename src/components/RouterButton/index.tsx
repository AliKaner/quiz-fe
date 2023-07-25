import { NextRouter, useRouter } from 'next/router';

export function PathButton({ path, text }: { path: string; text: string; }) {
    const router = useRouter();
    return (
        <div onClick={() => router.push(path)} className='bg-white text-primary text-xl font-bold rounded-2xl flex-1 cursor-pointer p-5'>
            {text}
        </div>
    )
}