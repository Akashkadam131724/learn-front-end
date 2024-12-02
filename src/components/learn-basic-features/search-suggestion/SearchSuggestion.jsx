import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const BannerSearchBox = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const inputRef = useRef(null);

  let debounceTimeout;

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/elastic_search_indexing/auto-suggest-results/`,
        {
          q: query.trim(),
          document_types: ["course"],
          page: 1,
          per_page: 10,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      setSuggestions(
        data.records["course"].map((item) => ({
          label: item.name,
          value: item.name,
        }))
      );
    } catch (error) {
      console.error("Error fetching suggestions:", error.message);
    }
  };

  const handleDebouncedSuggestions = (value) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      if (value.trim().length >= 3) {
        fetchSuggestions(value);
      }
    }, 300);
  };

  useEffect(() => {
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, []);

  const onSelect = (value) => {
    setSearchQuery(value);
    setIsSearchActive(false);
    router.push({
      pathname: `/search/${value?.replaceAll("/", "%2F")}`,
    });
    inputRef.current.blur();
  };

  const handleSearch = () => {
    if (searchQuery.trim().length >= 3) {
      router.push({
        pathname: `/search/${searchQuery?.replaceAll("/", "%2F")}`,
      });
    } else {
      inputRef.current.focus();
      setIsSearchActive(true);
    }
  };

  return (
    <div className="search-box-container">
      <SearchSuggestions
        id="search-suggestions"
        options={suggestions.map((suggestion) => suggestion.label)}
        onSearch={(value) => {
          setSearchQuery(value);
          handleDebouncedSuggestions(value);
        }}
        onSelect={onSelect}
        searchTerm={searchQuery}
      />
      <div className="search-button">
        <Button type="primary" onClick={handleSearch}>
          <SearchOutlined />
        </Button>
      </div>
    </div>
  );
};

export default BannerSearchBox;
import React, { useState } from "react";

const SearchSuggestions = ({ id, options, onSearch, onSelect, searchTerm }) => {
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeDescendant, setActiveDescendant] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    onSearch(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
    setActiveDescendant("");
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
      onSelect(selectedOption);
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
        onBlur={() => setTimeout(() => setIsExpanded(false), 100)} // Delay for option click
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
                onSelect(option);
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

