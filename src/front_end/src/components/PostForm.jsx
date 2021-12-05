import React, {useEffect, useState} from "react";

const PostForm = (props) => {
    const [Submit, setSubmit] = useState(false);
    const [Title, setTitle] = useState("");
    const [Summary, setSummary] = useState("");
    const [Location, setLocation] = useState("");
    const [ServerError, setServerError] = useState("");
    const [TitleError, setTitleError] = useState("");
    const [SummaryError, setSummaryError] = useState("");
    const [LocationError, setLocationError] = useState("");

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: Title,
                summary: Summary,
                location: Location,
                }
            )
        };
        if (Submit) {
            setSubmit(false);

                fetch("/make-post", requestOptions)
                    .then(response => response.json())
                    .then(json => {
                        let error = json["error"]
                        if (error) {
                            let errorMessage = json["message"];
                            setServerError(errorMessage);
                        }
                    })
                    .then(data => console.log(data))
            }
    }, [Submit, Location, setSubmit, Title, Summary]);

    const handleSubmit = (e) => {
        let t = titleValidation();
            let s = summaryValidation();
            let l = locationValidation();
            if (t && s && l ) {
                setSubmit(true);
            }
            else {
                e.preventDefault();
            }
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

    const titleValidation = () => {
        // Check for blank title
        if (Title === ""){
            setTitleError("Title can't be blank");
            return false;
        }
        setTitleError("");
        return true;
    }

    const summaryValidation = () => {
        // Check for blank summary
        if (Summary === ""){
            setSummaryError("Summary can't be blank");
            return false;
        }
        setSummaryError("");
        return true;
    }

    const locationValidation = () => {
        if (Location === ""){
            setLocationError("Location can't be blank");
            return false;
        }
        setLocationError("");
        return true;
    }

    return (
        <div id="post-form">
            <h2>Make a Post</h2>
            <form >
                <div id="server-error">
                    {ServerError}
                </div>
                <label htmlFor="title">
                    Title:
                    <input type="text" name="title" id="title" placeholder="Title" value={Title}
                           onChange={handleTitle}/>
                    <div className = "error">
                        {TitleError}
                    </div>
                </label>
                <label htmlFor="summary">
                    Summary:
                    <textarea name="summary" id="summary" placeholder="Summarize your trip here."
                              value={Summary} onChange={handleSummary}/>
                    <div className = "error">
                        {SummaryError}
                    </div>
                </label>
                <label htmlFor="location">
                    Location:
                    <input type="text" name="location" id="location" placeholder="Location" value={Location}
                           onChange={handleLocation}/>
                    <div className = "error">
                        {LocationError}
                    </div>
                </label>
                <input type="submit" onClick={handleSubmit} value="Add Post"/>
            </form>

        </div>
    )
};
export default PostForm;