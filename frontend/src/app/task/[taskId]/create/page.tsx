import BackLinkButton from "@/app/_components/molecule/BackLinkButton"
import Header from "@/app/_components/organism/Header"
import SubtaskForm from "@/app/_components/organism/SubtaskForm"

type Props = {
    params: {
        taskId: number
    }
}

export default function Page({ params }: Props) {
    return (
        <div className="flex flex-col w-screen h-screen">
            <Header>
                <div className="inline-block">
                    <BackLinkButton className="col-start-1" href="/">
                        ホーム
                    </BackLinkButton>
                </div>
            </Header>
            <div className="grow py-4 px-[20%]">
                <SubtaskForm parentId={params.taskId} />
            </div>
        </div>
    )
}