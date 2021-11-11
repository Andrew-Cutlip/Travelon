import React, {useEffect, useState} from "react";

const PostForm = (props) => {
    const [Submit, setSubmit] = useState(false);
    const [Title, setTitle] = useState("");
    const [Summary, setSummary] = useState("");
    const [Location, setLocation] = useState("");
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

    const handleSubmit = () => {
        setSubmit(true);
    };

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleSummary = (e) => {
      setSummary(e.target.value);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    return (
        <div>
            <form>
                <label htmlFor="title">
                    <input type="text" name="title" id="title" placeholder="Title" value={Title}
                           onChange={handleTitle}/>
                </label>
                <label htmlFor="summary">
                    <textarea name="summary" id="summary" placeholder="Summarize your trip here."
                              value={Summary} onChange={handleSummary}/>
                </label>
                <label htmlFor="location">
                    <input type="text" name="location" id="location" placeholder="Location" value={Location}
                           onChange={handleLocation}/>
                </label>
                <btn  type="submit" onclick={handleSubmit}>Add Post</btn>
            </form>

        </div>
    )
};
export default PostForm;