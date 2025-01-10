import { GITHUB_REPO_URL } from "@/utils/constants";
import ButtonPill from "../ButtonPill";
import IconGithub24 from "@/public/icons/ic-github";

export default function ButtonGitHub(){
    return (
        <ButtonPill label="View on GitHub" href={GITHUB_REPO_URL} icon={IconGithub24({className:'h-6'})} />
    )
}