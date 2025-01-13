import React, { useState } from "react";
import "./SearchBox.css";

const suggestions = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim()) {
      const filtered = suggestions.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsActive(true);
      setHighlightedIndex(-1); // Reset highlight
    } else {
      setFilteredSuggestions([]);
      setIsActive(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setIsActive(false);
  };

  const handleKeyDown = (e) => {
    if (!isActive || filteredSuggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex < filteredSuggestions.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : filteredSuggestions.length - 1
      );
    } else if (e.key === "Enter" && highlightedIndex !== -1) {
      e.preventDefault();
      setQuery(filteredSuggestions[highlightedIndex]);
      setIsActive(false);
    } else if (e.key === "Escape") {
      setIsActive(false);
    }
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        onFocus={() => query && setIsActive(true)}
        onBlur={() => setTimeout(() => setIsActive(false), 200)} // Delay to allow click
        onKeyDown={handleKeyDown}
        aria-autocomplete="list"
        aria-controls="suggestion-list"
      />
      <div
        id="suggestion-list"
        className={`suggestion-box ${isActive ? "active" : ""}`}
        role="listbox"
        aria-expanded={isActive}
      >
        {filteredSuggestions.length > 0
          ? filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                id={`suggestion-${index}`}
                className={`suggestion-item ${
                  index === highlightedIndex ? "highlighted" : ""
                }`}
                role="option"
                onClick={() => handleSuggestionClick(suggestion)}
                aria-selected={index === highlightedIndex}
              >
                {suggestion}
              </div>
            ))
          : isActive && <div className="suggestion-item">No results found</div>}
      </div>
    </div>
  );
};

export default SearchBox;


// import axios from "axios";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import React, { useRef, useState, useEffect } from "react";
// import useDebounce from "utils/api/use-debounce/use-debounce";
// import { SearchOutlined } from "@ant-design/icons";
// const formatResourceType = (resource) => {
//   const resourceName = resource;
//   const checkedResourceType =
//     resourceName === "contentpage" ? "solutions" : resourceName;

//   return (
//     checkedResourceType?.charAt(0)?.toUpperCase() +
//       checkedResourceType?.slice(1) || ""
//   );
// };

// const SearchBoxV2 = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [query, setQuery] = useState("");
//   const [highlightedIndex, setHighlightedIndex] = useState(-1);
//   const router = useRouter();
//   const [error, setError] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const inputRef = useRef(null);

//   const debouncedQuery = useDebounce(query, 400);
//   const [isGetSuggestions, setIsGetSuggestions] = useState(true);

//   const suggestionRefs = useRef([]); // To hold references to suggestion elements

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     setHighlightedIndex(-1); // Reset highlight
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setQuery(suggestion);
//     setIsActive(false);

//     if (suggestion.trim().length >= 1) {
//       setIsGetSuggestions(false); // Stop fetching suggestions on navigation
//       router.push({
//         pathname: `/search`,
//         query: {
//           q: `${suggestion?.replaceAll("/", "%2F")}`,
//         },
//       });
//     } else {
//       inputRef.current.focus();
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (suggestions.length === 0) return;

//     if (e.key === "ArrowDown") {
//       setIsGetSuggestions(false);
//       e.preventDefault();
//       setHighlightedIndex((prevIndex) => {
//         const newIndex = prevIndex < suggestions.length - 1 ? prevIndex + 1 : 0;
//         setQuery(suggestions[newIndex]?.value || "");
//         suggestionRefs.current[newIndex]?.scrollIntoView({
//           behavior: "smooth",
//           block: "nearest",
//         });
//         return newIndex;
//       });
//     } else if (e.key === "ArrowUp") {
//       setIsGetSuggestions(false);
//       e.preventDefault();
//       setHighlightedIndex((prevIndex) => {
//         const newIndex = prevIndex > 0 ? prevIndex - 1 : suggestions.length - 1;
//         setQuery(suggestions[newIndex]?.value || "");
//         suggestionRefs.current[newIndex]?.scrollIntoView({
//           behavior: "smooth",
//           block: "nearest",
//         });
//         return newIndex;
//       });
//     } else if (e.key === "Enter") {
//       setIsGetSuggestions(false);
//       e.preventDefault();
//       if (highlightedIndex !== -1) {
//         handleSuggestionClick(suggestions[highlightedIndex].value);
//       } else if (query.trim().length >= 1) {
//         handleSearch();
//       }
//     } else if (e.key === "Escape") {
//       setIsActive(false);
//     }
//   };

//   const fetchSuggestions = async (query) => {
//     try {
//       const response = await axios.post(
//         `https://cms.netcomlearning.com/api/v1/elastic_search_indexing/auto-suggest-results/`,
//         {
//           q: query.trim(),
//           page: 1,
//           per_page: 10,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const data = response.data;
//       const suggestionsArray = Object.entries(data.records).flatMap(
//         ([key, value]) => {
//           return value.map((item) => ({
//             label: item.name ?? item.title,
//             url: item.url,
//             value: item.name ?? item.title,
//             toolName: key,
//           }));
//         }
//       );

//       setSuggestions(suggestionsArray);
//     } catch (error) {
//       setError(error.message);
//       setSuggestions([]);
//     }
//   };

//   const handleSearch = async () => {
//     if (query.trim().length >= 1) {
//       setIsGetSuggestions(false); // Stop fetching suggestions on search
//       router.push({
//         pathname: `/search`,
//         query: {
//           q: `${query?.replaceAll("/", "%2F")}`,
//         },
//       });
//     } else {
//       inputRef.current.focus();
//     }
//   };

//   console.log(isGetSuggestions);

//   useEffect(() => {
//     if (debouncedQuery.length > 0 && isGetSuggestions) {
//       fetchSuggestions(debouncedQuery);
//     }
//   }, [debouncedQuery, isGetSuggestions]);

//   return (
//     <div className="search-wrapper-v2">
//       <div className="d-flex align-items-center search-bar-v2">
//         <input
//           type="text"
//           className="search-input"
//           value={query}
//           onChange={handleInputChange}
//           placeholder="Search..."
//           onBlur={() => setIsActive(false)}
//           onFocus={() => {
//             setIsGetSuggestions(true); // Allow fetching suggestions when typing
//             if (!isActive) {
//               setIsActive(true);
//             }
//           }}
//           onKeyDown={handleKeyDown}
//           ref={inputRef}
//         />
//         <div
//           className="d-flex align-items-center"
//           onClick={() => {
//             if (query) {
//               handleSearch(query);
//             }
//           }}
//         >
//           <div>
//             <SearchOutlined />
//           </div>
//         </div>
//       </div>

//       {suggestions.length > 0 && (
//         <div
//           className={`suggestion-box ${isActive ? "active" : ""}`}
//           role="listbox"
//         >
//           {suggestions.map((suggestion, index) => (
//             <div
//               key={suggestion.key}
//               className={`suggestion-item ${
//                 index === highlightedIndex ? "highlighted" : ""
//               }`}
//               onClick={() => handleSuggestionClick(suggestion.value)}
//               ref={(el) => (suggestionRefs.current[index] = el)} // Set ref to each suggestion
//             >
//               <a target="__blank" href={suggestion.url}>
//                 <div className="d-flex justify-content-between align-content-center">
//                   <span>{suggestion.label}</span>
//                   {formatResourceType(suggestion.toolName) && (
//                     <span className="tag flex-grow-0">
//                       {formatResourceType(suggestion.toolName)}
//                     </span>
//                   )}
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBoxV2;


