import "../../styles/form-section.css"

function PersonalInfo() {

    return (
        <div className="form-section" id="personal-info-form">
            <h2>Personal Information</h2>
            <form>
                <div className="input-field">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" name="fullName" id="fullName"/>
                </div>

                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title"/>
                </div>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>
                </div>

                <div className="input-field">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input type="tel" name="contactNumber" id="contactNumber"/>
                </div>

                <div className="input-field">
                    <label htmlFor="linkedIn">LinkedIn</label>
                    <input type="url" name="linkedIn" id="linkedIn"/>
                </div>

                <div className="input-field">
                    <label htmlFor="addUrl">Additional URL</label>
                    <input type="url" name="addUrl" id="addUrl"/>
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo