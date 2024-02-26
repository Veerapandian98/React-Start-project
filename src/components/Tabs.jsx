export default function Tabs({children, buttons, Buttonscontainer = 'menu'}) {
    return (
        <>
            <Buttonscontainer>{buttons}</Buttonscontainer>
            {children}
        </> 
    )
}