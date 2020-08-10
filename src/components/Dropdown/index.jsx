import React, { useState } from "react";
import "../../stylesheets/Dropdown.scss";
import dropdown from "../../assets/icons/DropDown Icon.png";
import onClickOutside from "react-onclickoutside";

const Dropdown = ({ title, items = [], multiSelect = false }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);

  const handleOnClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  };

  const isItemInSelection = (item) => {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  };

  const toggle = () => {
    setOpen(!open);
  };

  Dropdown.handleClickOutside = () => {
    setOpen(false);
  };

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p>
            {open ? (
              <img
                src={dropdown}
                alt="dropdown"
                width="20"
                style={{ transform: `rotate(180deg)` }}
              />
            ) : (
              <img src={dropdown} alt="dropdown" width="20" />
            )}
          </p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map((item) => {
            return (
              <li className="dd-list-item" key={item.id}>
                <button type="button" onClick={() => handleOnClick(item)}>
                  <span>{item.value}</span>
                  <span>{isItemInSelection(item) && "Selected"}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default Dropdown;
