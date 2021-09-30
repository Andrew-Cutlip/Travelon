import RegistrationForm from "./Registration"
import LoginForm from "./LoginForm"
function Page(props) {
    let pageContent = "";
    if (props.name === "register") {
        pageContent = <RegistrationForm onclick={props.onclick}></RegistrationForm>
    }
    else if (props.name === "login"){
        pageContent = <LoginForm></LoginForm>
    }
    return (
        <div id="page">
            { pageContent }
        </div>
    )
}

export default Page