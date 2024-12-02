import React, { useState } from "react";

const Dropdown = ({ id, options }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeDescendant, setActiveDescendant] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
    setActiveDescendant(""); // Reset the active descendant on new input
  };

  const handleKeyDown = (e) => {
    if (filteredOptions.length === 0) return;
  
    const currentIndex = filteredOptions.findIndex(
      (option) => `option-${id}-${option}` === activeDescendant
    );
  
    if (e.key === "ArrowDown") {
      const nextIndex = (currentIndex + 1) % filteredOptions.length;
      const nextId = `option-${id}-${filteredOptions[nextIndex]}`;
      setActiveDescendant(nextId);
      document.getElementById(nextId)?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "ArrowUp") {
      const prevIndex =
        (currentIndex - 1 + filteredOptions.length) % filteredOptions.length;
      const prevId = `option-${id}-${filteredOptions[prevIndex]}`;
      setActiveDescendant(prevId);
      document.getElementById(prevId)?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter" && activeDescendant) {
      const selectedOption = filteredOptions.find(
        (option) => `option-${id}-${option}` === activeDescendant
      );
      setSearchTerm(selectedOption);
      setIsExpanded(false);
    }
  };
  

  return (
    <div className="dropdown">
      <input
        type="text"
        role="combobox"
        aria-expanded={isExpanded}
        aria-owns={`listbox-${id}`}
        aria-activedescendant={activeDescendant}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setTimeout(() => setIsExpanded(false), 100)} // Delay to handle option click
      />
      {isExpanded && (
        <ul id={`listbox-${id}`} className="dropdown-listbox" role="listbox">
          {filteredOptions.map((option) => (
            <li
              key={option}
              id={`option-${id}-${option}`}
              role="option"
              className={`dropdown-item ${
                activeDescendant === `option-${id}-${option}` ? "active" : ""
              }`}
              onMouseDown={() => {
                setSearchTerm(option);
                setIsExpanded(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SearchSuggestions = () => {
  const dropdowns = [
    {
      id: 1,
      options: [
        "Apple Vendor",
        "Banana Vendor",
        "Cherry Vendor",
        "Dragonfruit Vendor",
        "Elderberry Vendor",
        "Fig Vendor",
        "Grape Vendor",
        "Honeydew Vendor",
        "Indian Fig Vendor",
        "Jackfruit Vendor",
        "Kiwi Vendor",
        "Lemon Vendor",
        "Mango Vendor",
        "Nectarine Vendor",
        "Orange Vendor",
        "Papaya Vendor",
        "Quince Vendor",
        "Raspberry Vendor",
        "Strawberry Vendor",
        "Tomato Vendor",
      ],
    },
 
  ];
  

  return (
    <div className="d-flex">
      {dropdowns.map((dropdown) => (
        <Dropdown
          key={dropdown.id}
          id={dropdown.id}
          options={dropdown.options}
        />
      ))}
    </div>
  );
};

export default SearchSuggestions;
