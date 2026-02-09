import { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "../../styles/form-section.css";

function ExperienceInfo({ experienceItems, setExperienceItems }) {
  const [itemDraft, setItemDraft] = useState({
    companyName: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function handleFormChange(event) {
    const field = event.target.name;
    const value = event.target.value;

    setItemDraft((prevItem) => ({ ...prevItem, [field]: value }));
  }

  function handleAddOpen() {
    setItemDraft({
      companyName: "",
      jobTitle: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsEditing(false);
    setIsAdding(true);
  }

  function handleEditOpen(item, index) {
    setItemDraft({
      companyName: item.companyName,
      jobTitle: item.jobTitle,
      startDate: item.startDate,
      endDate: item.endDate,
      description: item.description,
    });
    setEditIndex(index);
    setIsAdding(false);
    setIsEditing(true);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newItem = itemDraft;

    if (isEditing) {
      setExperienceItems((prevItems) =>
        prevItems.map((item, index) =>
          index === editIndex ? itemDraft : item,
        ),
      );
    } else {
      setExperienceItems((prevItems) => [...prevItems, newItem]);
    }

    setItemDraft({
      institutionName: "",
      course: "",
      graduationDate: "",
      description: "",
    });
    setIsAdding(false);
    setIsEditing(false);
    setEditIndex(null);
  }

  function handleFormCancel() {
    setItemDraft({
      institutionName: "",
      course: "",
      graduationDate: "",
      description: "",
    });
    setIsEditing(false);
    setIsAdding(false);
    setEditIndex(null);
  }

  function handleDeleteItem(index) {
    setExperienceItems((prevItems) =>
      prevItems.filter((_, idx) => idx !== index),
    );
  }

  if (!isAdding && !isEditing) {
    return (
      <div className="form-section" id="education-info-form">
        <h2>Experience</h2>
        <button
          type="button"
          className="add-btn clickable"
          onClick={handleAddOpen}
        >
          Add Experience +
        </button>
        {experienceItems.map((item, index) => (
          <div key={index} className="experience-item">
            <p>{item.companyName}</p>
            <div className="btn-container">
              <button
                className="edit-btn clickable"
                onClick={() => handleEditOpen(item, index)}
              >
                <FiEdit2 />
              </button>
              <button
                className="del-btn clickable"
                onClick={() => handleDeleteItem(index)}
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isAdding || isEditing) {
    return (
      <div className="form-section" id="experience-info-form">
        <h2>Experience</h2>
        <form>
          <div className="input-field">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={itemDraft.companyName}
              onChange={handleFormChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              value={itemDraft.jobTitle}
              onChange={handleFormChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="month"
              name="startDate"
              id="startDate"
              value={itemDraft.startDate}
              onChange={handleFormChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="endDate">End Date (N/A if current)</label>
            <input
              type="month"
              name="endDate"
              id="endDate"
              value={itemDraft.endDate}
              onChange={handleFormChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="description">Description (optional)</label>
            <textarea
              name="description"
              id="description"
              value={itemDraft.description}
              onChange={handleFormChange}
            />
          </div>

          <div className="btn-container">
            <button
              type="submit"
              className="submit-btn clickable"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
            <button
              type="reset"
              className="cancel-btn clickable"
              onClick={handleFormCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ExperienceInfo;
