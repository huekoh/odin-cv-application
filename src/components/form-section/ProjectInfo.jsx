import { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "../../styles/form-section.css";

function ProjectInfo({ projectItems, setProjectItems }) {
  const [itemDraft, setItemDraft] = useState({
    projectName: "",
    association: "",
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
      projectName: "",
      association: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsEditing(false);
    setIsAdding(true);
  }

  function handleEditOpen(item, index) {
    setItemDraft({
      projectName: item.projectName,
      association: item.association,
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
      setProjectItems((prevItems) =>
        prevItems.map((item, index) =>
          index === editIndex ? itemDraft : item,
        ),
      );
    } else {
      setProjectItems((prevItems) => [...prevItems, newItem]);
    }

    setItemDraft({
      projectName: "",
      association: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsAdding(false);
    setIsEditing(false);
    setEditIndex(null);
  }

  function handleFormCancel() {
    setItemDraft({
      projectName: "",
      association: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsEditing(false);
    setIsAdding(false);
    setEditIndex(null);
  }

  function handleDeleteItem(index) {
    setProjectItems((prevItems) => prevItems.filter((_, idx) => idx !== index));
  }

  if (!isAdding && !isEditing) {
    return (
      <div className="form-section" id="project-info-form">
        <h2>Projects</h2>
        <button
          type="button"
          className="add-btn clickable"
          onClick={handleAddOpen}
        >
          Add Project +
        </button>
        {projectItems.map((item, index) => (
          <div key={index} className="project-item">
            <p>{item.projectName}</p>
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
      <div className="form-section" id="project-info-form">
        <h2>Projects</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="input-field">
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              name="projectName"
              id="projectName"
              value={itemDraft.projectName}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="association">Project Association</label>
            <input
              type="text"
              name="association"
              id="association"
              value={itemDraft.association}
              onChange={handleFormChange}
              required
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
              required
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
            <label htmlFor="description">Description</label>
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

export default ProjectInfo;
