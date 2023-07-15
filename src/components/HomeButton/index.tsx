import { APP_NAME } from "@/shared/constants";
import { useRouter } from "next/dist/client/components/navigation";

export default function HomeButton() {
    const router = useRouter();

    return (
        <div onClick={() => router.push("home")} className="text-white text-xl  italic">
            {APP_NAME}
        </div>
    );
}