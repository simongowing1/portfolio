import { GITHUB_REPO_URL } from "@/utils/constants";
import ButtonPill from "../ButtonPill";
import IconGithub24 from "@/public/icons/ic-github";

type ButtonGitHubProps = {
    styling?: "black" | "white";
}

export default function ButtonGitHub({ styling = "white" }: ButtonGitHubProps) {
    const iconColor = styling === "black" ? "text-black" : "text-white";
    return (
        <ButtonPill label="View on GitHub" styling={styling} href={GITHUB_REPO_URL} icon={IconGithub24({ className: `h-6 ${iconColor}` })} />
    )
}