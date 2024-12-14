import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { useState } from "react";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name, number });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    const { name: newName, number: newNumber } = formData;

    if (newName.trim() && newNumber.trim()) {
      dispatch(
        editContact({ id, name: newName.trim(), number: newNumber.trim() })
      );
    }

    setShowModal(false);
  };
  return (
    <li className={s.contactItem}>
      <div>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <div className={s.boxBtn}>
        <button
          onClick={() => dispatch(deleteContact(id))}
          className={s.contactBtn}
        >
          Delete
        </button>
        <button className={s.contactBtn} onClick={() => setShowModal(true)}>
          Edit Contact
        </button>
      </div>
      {showModal && (
        <div className={s.modal}>
          <p>Edit Contact</p>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={s.inputModal}
            />
          </label>
          <label>
            Number:
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              className={s.inputModal}
            />
          </label>
          <button className={s.contactBtn} onClick={handleEdit}>
            Save
          </button>
        </div>
      )}
    </li>
  );
}

export default Contact;
