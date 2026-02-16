import { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "../../styles/form-section.css";

function SkillInfo({ skillItems, setSkillItems }) {
  const [itemDraft, setItemDraft] = useState({
    skillGroup: "",
    groupItems: "",
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
      skillGroup: "",
      groupItems: "",
    });
    setIsEditing(false);
    setIsAdding(true);
  }

  function handleEditOpen(item, index) {
    setItemDraft({
      skillGroup: item.skillGroup,
      groupItems: item.groupItems,
    });
    setEditIndex(index);
    setIsAdding(false);
    setIsEditing(true);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const newItem = itemDraft;

    if (isEditing) {
      setSkillItems((prevItems) =>
        prevItems.map((item, index) =>
          index === editIndex ? itemDraft : item,
        ),
      );
    } else {
      setSkillItems((prevItems) => [...prevItems, newItem]);
    }

    setItemDraft({
      skillGroup: "",
      groupItems: "",
    });
    setIsAdding(false);
    setIsEditing(false);
    setEditIndex(null);
  }

  function handleFormCancel() {
    setItemDraft({
      skillGroup: "",
      groupItems: "",
    });
    setIsEditing(false);
    setIsAdding(false);
    setEditIndex(null);
  }

  function handleDeleteItem(index) {
    setSkillItems((prevItems) => prevItems.filter((_, idx) => idx !== index));
  }

  if (!isAdding && !isEditing) {
    return (
      <div className="form-section" id="skills-info-form">
        <h2>Skills</h2>
        <button
          type="button"
          className="add-btn clickable"
          onClick={handleAddOpen}
        >
          Add Skill Group +
        </button>
        {skillItems.map((item, index) => (
          <div key={index} className="skill-item">
            <p>{item.skillGroup}</p>
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
      <div className="form-section" id="skills-info-form">
        <h2>Skills</h2>
        <form>
          <div className="input-field">
            <label htmlFor="skillGroup">Skill Group</label>
            <input
              type="text"
              name="skillGroup"
              id="skillGroup"
              value={itemDraft.skillGroup}
              onChange={handleFormChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="groupItems">Group Items</label>
            <textarea
              name="groupItems"
              id="groupItems"
              value={itemDraft.groupItems}
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

export default SkillInfo;
