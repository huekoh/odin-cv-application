import { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "../../styles/form-section.css";

function EducationInfo({ educationItems, setEducationItems }) {
  const [itemDraft, setItemDraft] = useState({
    institutionName: "",
    course: "",
    graduationDate: "",
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
      institutionName: "",
      course: "",
      graduationDate: "",
      description: "",
    });
    setIsEditing(false);
    setIsAdding(true);
  }

  function handleEditOpen(item, index) {
    setItemDraft({
      institutionName: item.institutionName,
      course: item.course,
      graduationDate: item.graduationDate,
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
      setEducationItems((prevItems) =>
        prevItems.map((item, index) =>
          index === editIndex ? itemDraft : item,
        ),
      );
    } else {
      setEducationItems((prevItems) => [...prevItems, newItem]);
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
    setEducationItems((prevItems) =>
      prevItems.filter((_, idx) => idx !== index),
    );
  }

  if (!isAdding && !isEditing) {
    return (
      <div className="form-section" id="education-info-form">
        <h2>Education</h2>
        <button
          type="button"
          className="add-btn clickable"
          onClick={handleAddOpen}
        >
          Add Education +
        </button>
        {educationItems.map((item, index) => (
          <div key={index} className="education-item">
            <p>{item.institutionName}</p>
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
      <div className="form-section" id="education-info-form">
        <h2>Education</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="input-field">
            <label htmlFor="institutionName">Institution Name</label>
            <input
              type="text"
              name="institutionName"
              id="institutionName"
              value={itemDraft.institutionName}
              onChange={handleFormChange}
              required
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
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="graduationDate">
              Graduation/Expected Graduation
            </label>
            <input
              type="month"
              name="graduationDate"
              id="graduationDate"
              value={itemDraft.graduationDate}
              onChange={handleFormChange}
              required
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
            <button type="submit" className="submit-btn clickable">
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

export default EducationInfo;
