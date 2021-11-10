import React from "react";

const PostForm = (props) => {
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