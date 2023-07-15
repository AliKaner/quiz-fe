import { NextRouter, useRouter } from 'next/router';

export function PathButton({ path, text }: { path: string; text: string; }) {
    const router = useRouter();
    return (
        <div onClick={() => router.push(path)}>
            {text}
        </div>
    )
}