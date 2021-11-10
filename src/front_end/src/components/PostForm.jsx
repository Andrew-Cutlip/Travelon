import React, {useEffect, useState} from "react";

const PostForm = (props) => {
    const [Submit, setSubmit] = useState(false);
    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
        };
        if (Submit) {
            setSubmit(false);
            fetch("/make-post", requestOptions)
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }, [Submit]);

    return (
        <div>
            <form>
                <label htmlFor="title">
                    <input type="text" name="title" id="title" placeholder="Title"/>
                </label>
                <label htmlFor="summary">
                    <textarea name="summary" id="summary" placeholder="Summarize your trip here."/>
                </label>
                <label htmlFor="location">
                    <input type="text" name="location" id="location" placeholder="Location"/>
                </label>
                <fieldset>

                </fieldset>
            </form>

        </div>
    )
};
export default PostForm;