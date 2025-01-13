import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState, useEffect } from "react";
import useDebounce from "utils/api/use-debounce/use-debounce";
import { SearchOutlined } from "@ant-design/icons";

import { createPortal } from "react-dom";

const formatResourceType = (resource) => {
  const resourceName = resource;
  const checkedResourceType =
    resourceName === "contentpage" ? "solutions" : resourceName;

  return (
    checkedResourceType?.charAt(0)?.toUpperCase() +
      checkedResourceType?.slice(1) || ""
  );
};

const SearchBoxV2 = () => {
  const [isActive, setIsActive] = useState(false);
  const [query, setQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const router = useRouter();
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const searchRef = useRef(null);

  const debouncedQuery = useDebounce(query, 400);
  const [isGetSuggestions, setIsGetSuggestions] = useState(true);

  const suggestionRefs = useRef([]); // To hold references to suggestion elements

  const suggestionBoxRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setHighlightedIndex(-1); // Reset highlight
    setIsGetSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setIsActive(false);

    if (suggestion.trim().length >= 1) {
      setIsGetSuggestions(false); // Stop fetching suggestions on navigation
      router.push({
        pathname: `/search`,
        query: {
          q: `${suggestion?.replaceAll("/", "%2F")}`,
        },
      });
    } else {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      setIsGetSuggestions(false);
      e.preventDefault();
      setHighlightedIndex((prevIndex) => {
        const newIndex = prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0;
        setQuery(suggestions[newIndex]?.value || "");
        suggestionRefs.current[newIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
        return newIndex;
      });
    } else if (e.key === "ArrowUp") {
      setIsGetSuggestions(false);
      e.preventDefault();
      setHighlightedIndex((prevIndex) => {
        const newIndex = prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1;
        setQuery(suggestions[newIndex]?.value || "");
        suggestionRefs.current[newIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
        return newIndex;
      });
    } else if (e.key === "Enter") {
      setIsGetSuggestions(false);
      e.preventDefault();
      if (highlightedIndex !== -1) {
        handleSuggestionClick(suggestions[highlightedIndex].value);
      } else if (query.trim().length >= 1) {
        handleSearch();
      }
    } else if (e.key === "Escape") {
      setHighlightedIndex(-1);
    }
  };

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.post(
        `https://cms.netcomlearning.com/api/v1/elastic_search_indexing/auto-suggest-results/`,
        {
          q: query.trim(),
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
      const suggestionsArray = Object.entries(data.records).flatMap(
        ([key, value]) => {
          return value.map((item) => ({
            label: item.name ?? item.title,
            url: item.url,
            value: item.name ?? item.title,
            toolName: key,
          }));
        }
      );

      setSuggestions(suggestionsArray);
    } catch (error) {
      setError(error.message);
      setSuggestions([]);
    }
  };

  const handleSearch = async () => {
    if (query.trim().length >= 1) {
      setIsGetSuggestions(false); // Stop fetching suggestions on search
      router.push({
        pathname: `/search`,
        query: {
          q: `${query?.replaceAll("/", "%2F")}`,
        },
      });
    } else {
      inputRef.current.focus();
    }
  };

  const updatePosition = () => {
    if (searchRef.current) {
      const rect = searchRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  useEffect(() => {
    if (debouncedQuery.length > 0 && isGetSuggestions) {
      fetchSuggestions(debouncedQuery);
    }
  }, [debouncedQuery, isGetSuggestions]);

  useEffect(() => {
    if (isActive) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
    }
    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [isActive]);

  return (
    <div className="search-wrapper-v2">
      <div className="d-flex align-items-center search-bar-v2" ref={searchRef}>
        <input
          type="text"
          className="search-input"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          onBlur={() => setIsActive(false)}
          onFocus={() => {
            setIsGetSuggestions(true); // Allow fetching suggestions when typing
            if (!isActive) {
              setIsActive(true);
            }
          }}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <div
          className="d-flex align-items-center"
          onClick={() => {
            if (query) {
              handleSearch(query);
            }
          }}
        >
          <div>
            <SearchOutlined />
          </div>
        </div>
      </div>

      {/* {suggestions.length > 0 && (
        <div
          className={`suggestion-box ${true ? "active" : ""}`}
          role="listbox"
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={suggestion.key}
              className={`suggestion-item ${
                index === highlightedIndex ? "highlighted" : ""
              }`}
              onClick={() => handleSuggestionClick(suggestion.value)}
              ref={(el) => (suggestionRefs.current[index] = el)} // Set ref to each suggestion
            >
              <a target="__blank" href={suggestion.url}>
                <div className="d-flex justify-content-between align-content-center">
                  <span>{suggestion.label}</span>
                  {formatResourceType(suggestion.toolName) && (
                    <span className="tag flex-grow-0">
                      {formatResourceType(suggestion.toolName)}
                    </span>
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>
      )} */}

      {isActive &&
        suggestions.length > 0 &&
        createPortal(
          <div
            className="suggestion-box-v2"
            ref={suggestionBoxRef}
            style={{
              position: "absolute",
              top: `${position.top + 2}px`,
              left: `${position.left}px`,
              width: `${position.width}px`,
              zIndex: 9,
            }}
          >
            <div className="suggestion-box-v2-container">
              {suggestions.map((suggestion, index) => (
                <div
                  key={suggestion.url}
                  className={`suggestion-item ${
                    index === highlightedIndex ? "highlighted" : ""
                  }`}
                  onClick={() => handleSuggestionClick(suggestion.value)}
                  ref={(el) => (suggestionRefs.current[index] = el)} // Set ref to each suggestion
                >
                  <a target="__blank" href={suggestion.url}>
                    <div className="d-flex justify-content-between align-items-center gap-3">
                      <span>{suggestion.label}</span>
                      {formatResourceType(suggestion.toolName) && (
                        <span className="tag" style={{ flex: "none" }}>
                          {formatResourceType(suggestion.toolName)}
                        </span>
                      )}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default SearchBoxV2;

// .search-wrapper-v2 {
//   position: relative;
//   width: 100%;

//   .search-bar-v2 {
//     border-radius: 30px;
//     box-sizing: border-box; // Ensures padding and border are included in total size
//     overflow: hidden;
//     padding: 4px;
//     background-color: white;

//     // Change border color on input focus
//     &:focus-within {
//       border: 2px solid $grey; // Replace with your desired focus border color
//     }

//     > :last-child {
//       height: 46px;
//       cursor: pointer;
//       padding-right: 6px;

//       div {
//         background-color: $blue;
//         padding: 14px 14px;
//         border-radius: 50%;
//         width: 46px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         span {
//           svg {
//             color: $white;
//           }
//         }
//       }
//     }

//     input {
//       box-sizing: border-box; // Includes padding and border in the element's dimensions
//       width: 100%; // Ensures input does not exceed parent width
//       padding: 14px 20px 14px 20px;
//       border: none;
//       outline: none;
//       @include h4-font;
//       color: $navy-blue-dark;
//       font-weight: 600;

//       &::placeholder {
//         color: $grey;
//         @include h4-font;
//         font-weight: 600;
//       }
//     }
//   }
// }

// .suggestion-box-v2 {
//   width: 100%;
//   border-radius: 12px;
//   overflow: hidden;
//   z-index: 9;
//   border: 1px solid #ccc;
//   background-color: white;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

//   .suggestion-box-v2-container {
//     overflow: auto;
//     width: 100%;
//     height: auto;
//     max-height: 272px;

//     @media (min-width: $small-device-min) and (max-width: $small-device-max) {
//       max-height: 252px;
//     }

//     // tablet screens
//     @media (min-width: $tablet-min) and (max-width: $tablet-max) {
//       max-height: 242px;
//     }

//     .suggestion-item {
//       padding: 10px 10px 10px 20px;

//       cursor: pointer;
//       @include h4-font;
//       color: $navy-blue;
//       position: relative;
//       font-weight: 600;

//       a {
//         color: $navy-blue;
//         text-decoration: none;
//       }

//       &:hover,
//       &.highlighted {
//         background-color: #f0f0f0;
//         text-decoration: underline;
//       }

//       .tag {
//         padding: 4px 8px;
//         background-color: $white-grey;
//         @include para3-font;
//       }
//     }
//   }
// }
