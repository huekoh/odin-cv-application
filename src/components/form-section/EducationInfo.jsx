import "../../styles/form-section.css"

function EducationInfo() {
    return (
        <div className="form-section" id="education-info-form">
            <h2>Education</h2>
            <form>
                <div className="input-field">
                    <label>Institution Name</label>
                    <input type="text" />
                </div>

                <div className="input-field">
                    <label>Course of Study</label>
                    <input type="text" />
                </div>

                <div className="input-field">
                    <label>Graduation/Expected Graduation</label>
                    <input type="date" />
                </div>

                <div className="input-field">
                    <label>Description</label>
                    <textarea />
                </div>

                <div className="form-btns">
                    <button className="submit-btn">Submit</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EducationInfo