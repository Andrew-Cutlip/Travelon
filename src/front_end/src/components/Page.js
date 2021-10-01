import RegistrationForm from "./RegistrationForm"
import LoginForm from "./LoginForm"
function Page(props) {
    let pageContent = <LoginForm></LoginForm>;
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