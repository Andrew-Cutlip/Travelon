function Page(props) {
    let pageContent = "";
    if (props.name == "register"){
        pageContent = "register"
    }
    return (
        <div id="page">
            { pageContent }
        </div>
    )
}

export default Page