import "../../styles/form-section.css"

function PersonalInfo({personalInfo, setPersonalInfo}) {

    function handleFormChange(event) {
        const field = event.target.name;
        const value = event.target.value;

        setPersonalInfo((prev) => 
            ({...prev, [field]: value})
        )
    }

    return (
        <div className="form-section" id="personal-info-form">
            <h2>Personal Information</h2>
            <form>
                <div className="input-field">
                    <label htmlFor="fullName">Full Name</label>
                    <input 
                        type="text" 
                        name="fullName" 
                        id="fullName"
                        value={personalInfo.fullName}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title"
                        value={personalInfo.title}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        value={personalInfo.email}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input 
                        type="tel" 
                        name="contactNumber" 
                        id="contactNumber"
                        value={personalInfo.contactNumber}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="linkedIn">LinkedIn</label>
                    <input 
                        type="url" 
                        name="linkedIn" 
                        id="linkedIn"
                        value={personalInfo.linkedIn}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="addUrl">Additional URL (optional)</label>
                    <input 
                        type="url" 
                        name="addUrl" 
                        id="addUrl"
                        value={personalInfo.addUrl}
                        onChange={handleFormChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default PersonalInfo