import "../../styles/form-section.css"

function PersonalInfo() {

    return (
        <div className="form-section" id="personal-info-form">
            <h2>Personal Information</h2>
            <form>
                <div className="input-field">
                    <label>Full Name</label>
                    <input type="text" />
                </div>

                <div className="input-field">
                    <label>Title</label>
                    <input type="text" />
                </div>

                <div className="input-field">
                    <label>Email</label>
                    <input type="email" />
                </div>

                <div className="input-field">
                    <label>Contact Number</label>
                    <input type="tel"/>
                </div>

                <div className="input-field">
                    <label>LinkedIn</label>
                    <input type="url" />
                </div>

                <div className="input-field">
                    <label>Additional URL</label>
                    <input type="url" />
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo