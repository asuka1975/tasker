type Props = {
    children: React.ReactNode,
    modal: React.ReactNode
}

export default function CookbookLayout({
    children,
    modal,
}: Props) {
    return (
        <html lang="ja">
            <body>
                {children}
                {modal}
            </body>
        </html>
    )
}