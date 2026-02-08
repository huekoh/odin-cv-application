import { useState } from "react";
import "../../styles/form-section.css"

function EducationInfo({educationItems, setEducationItems}) {
    const [itemDraft, setItemDraft] = useState({
        institutionName: "",
        course: "",
        graduationDate: "",
        description: "",
    })

    function handleFormChange(event) {
        const field = event.target.name;
        const value = event.target.value;

        setItemDraft((prevItem) => ({...prevItem, [field]: value}))
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const newItem = itemDraft
        setEducationItems((prevItems) => [...prevItems, newItem])
    }

    function handleFormCancel(event) {
        setItemDraft({
            institutionName: "",
            course: "",
            graduationDate: "",
            description: "",
        })
    }

    return (
        <div className="form-section" id="education-info-form">
            <h2>Education</h2>
            <form>
                <div className="input-field">
                    <label htmlFor="institutionName">Institution Name</label>
                    <input 
                        type="text" 
                        name="institutionName" 
                        id="institutionName" 
                        value={itemDraft.institutionName} 
                        onChange={handleFormChange}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="course">Course of Study</label>
                    <input 
                        type="text" 
                        name="course" 
                        id="course" 
                        value={itemDraft.course}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="graduationDate">Graduation/Expected Graduation</label>
                    <input 
                        type="date" 
                        name="graduationDate" 
                        id="graduationDate"
                        value={itemDraft.graduationDate}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="description">Description</label>
                    <textarea 
                        name="description" 
                        id="description"
                        value={itemDraft.description}
                        onChange={handleFormChange}
                    />
                </div>

                <div className="form-btns">
                    <button 
                        type="submit"
                        className="submit-btn"
                        onClick={handleFormSubmit}
                    >
                        Submit
                    </button>
                    <button 
                        type="reset"
                        className="cancel-btn"
                        onClick={handleFormCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EducationInfo