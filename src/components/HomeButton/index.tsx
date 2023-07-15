import { useRouter } from "next/dist/client/components/navigation";

export default function HomeButton() {
    const router = useRouter();

    return (
        <div onClick={() => router.push("home")}>
            {PROJECT_NAME}
        </div>
    );
}