import { Divider, Empty, Skeleton, Spin } from "antd";
import axios from "axios";
import { listResources } from "components/search-v3/seach-results/all-resources";
import RenderResources from "components/search-v3/seach-results/components/render-resources";
import EmptyResults from "components/shared/filter-shared/Empty-Results/empty-results";
import FilterListingLoader from "components/shared/filter-shared/filter-loader/filter-listing-loader";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import useDebounce from "utils/api/use-debounce/use-debounce";
import Image from "next/image";

const id = 1;

const SearchSuggestionsMobile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeDescendant, setActiveDescendant] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);

  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );

  const [isManualChange, setIsManualChange] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showResult, setShowResults] = useState(false);
  const [lastSearch, setLastSearch] = useState("");
  const router = useRouter();
  const previousSearchRef = useRef("");
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);
  let debouncedQuery = useDebounce(searchQuery, 300);
  let cancelTokenSource;

  const [results, setResults] = useState({
    total: 0,
    data: [],
    total_pages: 1,
    next_page: false,
    count: 0,
  });

  let limit = 10;

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    inputRef.current.blur();
  };

  function getLabelOrder(label) {
    const labelOrder = {
      course: 1,
      certification: 2,
      vendor: 3,
      product: 4,
      contetnpage: 5,
      webinar: 6,
      blog: 7,
      casestudy: 8,
      ebook: 8,
    };

    return labelOrder[label] || Number.MAX_SAFE_INTEGER;
  }

  const handleSuggestions = async (query) => {
    if (!query.trim()) return;

    if (cancelTokenSource) {
      cancelTokenSource.cancel("Request canceled due to new search query");
    }
    cancelTokenSource = axios.CancelToken.source();

    setIsSuggesting(true);

    let params = {
      q: query.trim(),
      // document_types: ["course"],
      page: 1,
      per_page: 10,
    };

    try {
      const response = await axios.post(
        `https://cms.netcomlearning.com/api/v1/elastic_search_indexing/auto-suggest-results/`,
        { ...params },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;
      const sortedKeys =
        Object.keys(data?.records).sort(
          (a, b) => getLabelOrder(a) - getLabelOrder(b)
        ) || [];

      const sortedObject = sortedKeys.reduce((obj, key) => {
        obj[key] = data.records[key];
        return obj;
      }, {});

      const suggestionsArray = Object.entries(sortedObject).flatMap(
        ([key, value]) =>
          value.map((item) => ({
            value: item.name ?? item.title,
            toolName: key,
            url: item.url ?? "#",
            id: item.id,
          }))
      );

      setSuggestions(suggestionsArray.slice(0, 10));
      setActiveDescendant("");
    } catch (error) {
      if (!axios.isCancel(error)) {
        setError(error.message);
      }
      setSuggestions([]);
    } finally {
      setIsSuggesting(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setIsManualChange(false); // Trigger fetch for user input
    setSearchQuery(value);
    if (!value) setSuggestions([]);
  };

  const handleKeyDown = async (e) => {
    // try {
    //   if (suggestions.length === 0 || !e.target.value) return;

    //   const currentIndex = suggestions.findIndex(
    //     (option) => `option-${id}-${option.value}` === activeDescendant
    //   );

    //   // console.log(suggestions[currentIndex]);

    //   const findOption = document?.getElementById(
    //     `option-${id}-${suggestions[currentIndex]?.value}-${suggestions[currentIndex]?.id}`
    //   );
    //   if (findOption) {
    //     findOption.scroll({ behavior: "smooth" });
    //   }

    //   if (e.key === "ArrowDown") {
    //     const nextIndex = (currentIndex + 1) % suggestions.length;
    //     const nextId = `option-${id}-${suggestions[nextIndex].value}`;
    //     setActiveDescendant(nextId);
    //     setSearchQuery(suggestions[nextIndex].value);
    //     setIsManualChange(true); // Prevent fetch
    //   } else if (e.key === "ArrowUp") {
    //     const prevIndex =
    //       (currentIndex - 1 + suggestions.length) % suggestions.length;
    //     const prevId = `option-${id}-${suggestions[prevIndex].value}`;
    //     setActiveDescendant(prevId);
    //     setSearchQuery(suggestions[prevIndex].value);
    //     setIsManualChange(true); // Prevent fetch
    //   } else if (e.key === "Enter") {
    //     const selectedOption = suggestions.find(
    //       (option) => `option-${id}-${option.value}` === activeDescendant
    //     );

    //     if (selectedOption?.value) {
    //       addSearchToHistory(selectedOption?.value);
    //       setIsExpanded(false);
    //       setIsManualChange(true); // Prevent fetch
    //       await handleSearch(selectedOption?.value);

    //       return;
    //     }

    //     if (searchQuery) {
    //       addSearchToHistory(searchQuery);
    //       setIsExpanded(false);
    //       setIsManualChange(true); // Prevent fetch
    //       await handleSearch(searchQuery);
    //     }
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
    if (e.key === "Enter") {
      if (searchQuery.trim().length > 0) {
        addSearchToHistory(searchQuery);
        setIsExpanded(false);
        setIsManualChange(true); // Prevent fetch
        await handleSearch(searchQuery);
      }
    }
  };

  const MAX_HISTORY = 10;

  const addSearchToHistory = (query) => {
    // Retrieve existing history or initialize with an empty array
    let existingHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];

    // Remove any existing entry of the same query (case-insensitive)
    existingHistory = existingHistory.filter(
      (item) => item?.value?.toLowerCase() !== query?.toLowerCase()
    );

    // Add the new query to the top
    existingHistory.unshift({ value: query });

    // Trim the history to keep only the latest MAX_HISTORY items
    if (existingHistory.length > MAX_HISTORY) {
      existingHistory = existingHistory.slice(0, MAX_HISTORY);
    }

    // Update the state and localStorage
    setSearchHistory(existingHistory);
    localStorage.setItem("searchHistory", JSON.stringify(existingHistory));
  };

  const removeSuggestionsFromSearchHistory = (query) => {
    // Retrieve existing history or initialize with an empty array
    let existingHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];

    // Remove any existing entry of the same query (case-insensitive)
    existingHistory = existingHistory.filter(
      (item) => item?.value?.toLowerCase() !== query?.toLowerCase()
    );

    // Update the state and localStorage
    setSearchHistory(existingHistory);
    localStorage.setItem("searchHistory", JSON.stringify(existingHistory));
  };

  const handleSearch = async (queryInput) => {
    if (isLoading) return;

    setShowResults(true);
    setIsLoading(true);
    handleBlur();

    let query = queryInput ? queryInput?.trim() : searchQuery.trim();
    if (query.length === 0) {
      setIsLoading(false);
      setResults({
        total: 0,
        data: [],
        total_pages: 1,
        next_page: false,
        count: 0,
      });
      return;
    }

    let params = {
      q: query.trim(),
      document_types: [activeTab],
      page: 1,
      per_page: activeTab === "All" ? 100 : limit,
    };

    if (activeTab === "All") {
      delete params.document_types;
    }

    try {
      const response = await axios.post(
        `https://cms.netcomlearning.com/api/v1/elastic_search_indexing/results/`,
        { ...params },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      const sortedKeys = Object.keys(data.records).sort(
        (a, b) => getLabelOrder(a) - getLabelOrder(b)
      );

      const sortedObject = sortedKeys.reduce((obj, key) => {
        obj[key] = data.records[key];
        return obj;
      }, {});

      let total = Object.entries(data.info).map(([key, value]) => {
        return value.total_result_count;
      });
      // console.log(total);
      const sum = total.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

      setResults({
        total: sum,
        total_pages: data.info[activeTab]?.num_pages,
        data: sortedObject,
        info: data.info,
      });
      // setLastSearch(query);
      // setActiveDescendant("");
    } catch (error) {
      setResults({
        total: 0,
        data: [],
        total_pages: 1,
        next_page: false,
        count: 0,
      });
    } finally {
      setIsLoading(false);
      setCurrentPage(1);
    }
  };

  const handelMore = async () => {
    if (!searchQuery) return;
    try {
      const response = await axios.post(
        `https://cms.netcomlearning.com/api/v1/elastic_search_indexing/results/`,
        {
          q: searchQuery.trim(),
          document_types: [activeTab],
          page: currentPage + 1,
          per_page: limit,
        }, // Set the request body to null since we're sending data in params
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      const sortedKeys = Object.keys(data.records).sort(
        (a, b) => getLabelOrder(a) - getLabelOrder(b)
      );

      const sortedObject = sortedKeys.reduce((obj, key) => {
        obj[key] = data.records[key];
        return obj;
      }, {});

      setResults((prevResults) => ({
        total: data.info[activeTab]
          ? data.info[activeTab]?.total_result_count
          : 0,
        total_pages: data.info[activeTab]?.num_pages,
        data: {
          ...prevResults,
          [`${activeTab}`]: [
            ...(prevResults?.data?.[activeTab] || []), // Ensure prevResults?.data?.[activeTab] is an array
            ...data.records[activeTab],
          ],
        },
      }));

      // Update the currentPage
      setCurrentPage(data.info[activeTab]?.current_page);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoadingMore(false);
    }
  };
  // console.log(results.total_pages);
  let lastScrollTop = 0;
  const handleScroll = () => {
    // Select the scroll container and the target element
    const scrollContainer = document.querySelector(".results-cards-container"); // Your scrollable container
    const globalFooter = document.querySelector(".touch-div");

    // Get the scroll position
    const currentScrollTop = scrollContainer
      ? scrollContainer.scrollTop
      : window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the viewport height and the top position of the touch-div
    const windowHeight = scrollContainer
      ? scrollContainer.clientHeight
      : window.innerHeight;
    const footerRect = globalFooter?.getBoundingClientRect();
    const footerTop = footerRect?.top;

    // Check if the touch-div is visible in the viewport
    if (
      footerTop >= 0 && // Element has entered the viewport
      // footerTop <= windowHeight && // Element is still within the viewport
      results.total_pages >= currentPage + 1 &&
      searchQuery
    ) {
      setIsLoadingMore(true);
    }

    // Update the last scroll position
    lastScrollTop = currentScrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [results.total_pages, currentPage]);

  useEffect(() => {
    if (!isLoadingMore) return;

    handelMore();
  }, [isLoadingMore]);

  useEffect(() => {
    if (!activeTab) return;
    if (searchQuery.trim().length >= 1) {
      setIsLoading(true);
      setResults({
        total: 0,
        data: [],
        total_pages: 1,
        next_page: false,
        count: 0,
      });
      handleSearch();
      // handelSuggestions(searchQuery);
    } else {
      setResults({
        total: 0,
        data: [],
        total_pages: 1,
        next_page: false,
        count: 0,
      });
    }
  }, [activeTab]);

  const handleBack = () => {
    window.history.state && window.history.state.idx > 0 //history.state.history.length > 0.
      ? router.back()
      : router.push("/");
  };

  // useEffect(() => {
  //   if (!isManualChange && debouncedQuery.length) {
  //     handleSuggestions(debouncedQuery);
  //   }
  // }, [debouncedQuery, isManualChange]);

  // useEffect(() => {
  //   previousSearchRef.current = lastSearch;
  // }, [lastSearch]);

  useEffect(() => {
    if (!router.query.q) {
      inputRef.current.focus();
    } else {
      setSearchQuery(router.query.q);
      handleSearch(router.query.q);
    }
  }, []);
  return (
    <>
      <div className="search-v2 display-mobile-only">
        <div className="search-results">
          <div className="search-bar-fixed">
            <div className="d-flex align-items-center page-title">
              <div
                onClick={() => {
                  handleBack();
                }}
              >
                <Image
                  src="/nav/back-arrow.svg"
                  height={40}
                  width={40}
                  alt=""
                />
              </div>
              <h4>Search</h4>
            </div>
          </div>

          <div className="d-flex align-items-center search-bar-v2">
            <div
              className="d-flex align-items-center"
              onClick={() => {
                if (searchQuery) {
                  handleSearch(searchQuery);
                }
              }}
            >
              <Image src="/nav/search_icon.svg" height={16} width={16} alt="" />
            </div>
            <input
              className="w-100"
              ref={inputRef}
              type="text"
              role="combobox"
              aria-expanded={isExpanded}
              aria-owns={`listbox-${id}`}
              aria-activedescendant={activeDescendant}
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                handleFocus();
                setIsExpanded(true);
                setShowResults(false); // on search store last search
                // if (searchQuery) {
                //   handleSuggestions(searchQuery);
                // }
              }}
              // onBlur={() => {
              //   handleBlur();
              // }}
            />
            {searchQuery && (
              <div className="d-flex align-items-center close-button">
                <Image
                  src="/icons/close-icon-promotion.svg"
                  onClick={() => setSearchQuery("")}
                  height={16}
                  width={16}
                  alt=""
                />
              </div>
            )}
          </div>
          {isSuggesting && !isLoading && (
            <div className="safe-area">
              <div className="loading-indicator"></div>
            </div>
          )}
          {!isFocused && searchQuery && (
            <>
              <div className="d-block d-sm-none mobile-tabs">
                <AllTabs
                  isLoading={isLoading}
                  handleTabClick={handleTabClick}
                  setCurrentPage={setCurrentPage}
                  activeTab={activeTab}
                />
              </div>
              {/* <AnswerCard answer={aiAnswer} /> */}

              <div className="safe-area">
                <h3 className="result-count">
                  {isLoading ? (
                    <Skeleton.Input />
                  ) : (
                    <>
                      {results.total ?? 0}{" "}
                      {`${
                        activeTab === "All"
                          ? "result"
                          : activeTab === "contentpage"
                          ? "solution"
                          : activeTab === "casestudy"
                          ? "case studies"
                          : activeTab
                      }${
                        results.total === 0
                          ? ""
                          : `${
                              results.total > 1
                                ? activeTab === "casestudy"
                                  ? ""
                                  : "s"
                                : ""
                            }`
                      }`}{" "}
                      found
                    </>
                  )}
                </h3>
              </div>
            </>
          )}

          <div className="safe-area">
            {!searchQuery && !isLoading && !isSuggesting && (
              <>
                {searchHistory.length > 0 && (
                  <p className="recent-text">Your recent search </p>
                )}
                <ul
                  className="history-list"
                  id={`listbox-${id}`}
                  role="listbox"
                >
                  {searchHistory.map((option, index) => (
                    <li
                      key={option.value}
                      id={`option-${id}-${option.value}`}
                      className="history-item"
                      style={{
                        backgroundColor:
                          activeDescendant === `option-${id}-${option.value}`
                            ? "grey"
                            : "white",
                      }}
                      role="option"
                      // onClick={() => {
                      //   setSearchQuery(option.value);
                      //   setIsExpanded(false);
                      //   setIsManualChange(true); // Prevent fetch
                      //   handleSearch(option.value);
                      // }}
                    >
                      <span
                        // onClick={() => handleSearch(option.value)}

                        onMouseDown={() => {
                          setSearchQuery(option.value);
                          addSearchToHistory(option.value);
                          setIsExpanded(false);
                          setIsManualChange(true); // Prevent fetch
                          handleSearch(option.value);
                        }}
                      >
                        {option.value}
                      </span>

                      <Image
                        src="/icons/close-icon-promotion.svg"
                        onClick={() =>
                          removeSuggestionsFromSearchHistory(option.value)
                        }
                        height={20}
                        width={20}
                        alt=""
                      />
                    </li>
                  ))}
                </ul>
              </>
            )}
            {isFocused && searchQuery && (
              <>
                <ul className="suggestion-listbox"></ul>
                {/* {false && (
                  <ul
                    id={`listbox-${id}`}
                    className="suggestion-listbox"
                    role="listbox"
                  >
                    {suggestions.map((option) => {
                      // Split the option value based on the search query
                      const parts = (option?.value || "").split(
                        new RegExp(`(${searchQuery})`, "gi") // Match query case-insensitively
                      );

                      return (
                        <li
                          key={option.value}
                          id={`option-${id}-${option.value}-${option.id}`}
                          style={{
                            backgroundColor:
                              activeDescendant ===
                              `option-${id}-${option.value}`
                                ? "#e2e2e2"
                                : "white",
                          }}
                          className="suggestion-item"
                          role="option"
                          onMouseDown={() => {
                            setSearchQuery(option.value);
                            addSearchToHistory(option.value);
                            setIsExpanded(false);
                            setIsManualChange(true); // Prevent fetch
                            // handleSearch(option.value);
                          }}
                          onClick={() => {
                            window.open(option.url, "_blank");
                          }}
                        >
                          <p className="toolName">
                            {option.toolName.charAt(0).toUpperCase() +
                              option.toolName.slice(1)}
                          </p>

                          {parts.map((part, index) =>
                            part.toLowerCase() === searchQuery.toLowerCase() ? (
                              <span
                                key={index}
                                style={{
                                  fontWeight: "bold",
                                  color: "#7275e6",
                                }} // Highlight style
                              >
                                {part}
                              </span>
                            ) : (
                              <span key={index}>{part}</span>
                            )
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )} */}

                {/* {suggestions.length === 0 && searchQuery && !isSuggesting && (
                  <Empty description="No suggestions found" />
                )} */}
              </>
            )}
            {!isFocused && searchQuery && (
              <>
                {isLoading && (
                  <div>
                    <FilterListingLoader isHide={true} />
                  </div>
                )}

                {!isLoading && (
                  <div className="results-cards-container">
                    <RenderResources results={results} activeTab={activeTab} />
                  </div>
                )}

                {isLoadingMore && (
                  <div className="mt-4 mb-4 text-center">
                    <Spin tip="Loading more..." style={{ color: "#181a53" }} />
                  </div>
                )}

                {!(results.total_pages >= currentPage + 1) &&
                  results.total > 0 && (
                    <Divider className="text-center mt-5">
                      End of the list
                    </Divider>
                  )}
                {results.total === 0 && !isLoading && (
                  <div className="mt-5">
                    <EmptyResults />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const AllTabs = ({ handleTabClick, setCurrentPage, activeTab, isLoading }) => {
  return (
    <ul className="tabs list-unstyled">
      {listResources.map((resource) => {
        return (
          <li
            key={resource.id}
            className={activeTab === resource.document_type ? "active" : ""}
            onClick={() => {
              if (!isLoading) {
                handleTabClick(resource.document_type);
                setCurrentPage(1);
              }
            }}
          >
            {resource.title}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchSuggestionsMobile;

// .search-v2 {
//   @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//     background-color: $white !important;
//   }
//   .search-results {
//     .search-wrapper {
//       background-color: $f5f5f5 !important;
//       padding: 32px 0px;

//       @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//         padding: 24px 0px;
//       }

//       .search-bar {
//         display: flex;

//         border-radius: 12px; /* Adjust the border-radius as needed */
//         box-shadow: 3px 3px 10px 0px $white-grey;

//         .auto-search-page {
//           width: 100%;
//           border-radius: none !important;
//           height: auto;
//           position: relative;

//           .ant-select-selector {
//             height: 56px;

//             @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//               height: 48px;
//             }

//             width: 100%;
//             display: block;
//             position: relative;
//             border-radius: 12px;
//             border: 1px solid #e2e2e2;
//             border-top-right-radius: 0;
//             border-bottom-right-radius: 0;
//             // top: 0;
//             inset-inline-start: 0px;
//             inset-inline-end: 0px;
//             bottom: 0;
//             padding: 0;

//             .ant-select-selection-search {
//               width: 100%;
//               display: block;
//               position: relative;
//               inset-inline-start: 0px;
//               inset-inline-end: 0px;
//               bottom: 0;
//               padding: 0;
//             }
//           }

//           input {
//             // background-color: #080922;
//             height: auto;
//             padding: 16px 20px;
//             outline: none;
//             border: none;
//             @include h4-font;
//             color: $navy-blue;
//             font-weight: 600;
//             width: 100%;
//             font-family: "Manrope", sans-serif;

//             @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//               padding: 12px 20px;
//               height: 48px;
//               font-size: 16px;
//               font-weight: 600;
//               line-height: 26px;
//               letter-spacing: 1px;
//             }

//             &::placeholder {
//               color: $white;
//               font-weight: 600;
//             }

//             &:focus {
//               outline: none;
//               border: none;
//             }
//           }
//           .ant-select-selection-placeholder {
//             color: $grey;
//             font-family: "Manrope", sans-serif;
//             font-weight: 600;
//             position: absolute;
//             top: 14px;
//             left: 20px;

//             @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//               top: 12px;
//               left: 20px;
//             }
//           }
//         }

//         .search-button {
//           span,
//           button {
//             background-color: $blue;
//             display: inline-flex;
//             align-items: center;
//             justify-content: center;
//             width: 56px;
//             height: 56px;
//             border-radius: 0px 12px 12px 0px;

//             @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//               height: 48px;
//               width: 48px;
//             }

//             svg {
//               font-size: 20px;
//             }
//           }
//         }
//       }
//     }

//     .page-title {
//       padding: 7px 0px 7px 14px;
//       h4 {
//         color: $navy-blue;
//         @include h4-font;
//         padding-left: 8px;
//       }
//     }

//     .search-bar-fixed {
//       position: sticky;
//       top: 0;
//       width: 100%;
//       z-index: 10;
//       background: $white;
//     }

//     .search-bar-v2 {
//       border: 1px solid $grey;
//       border-radius: 10px;
//       box-sizing: border-box; // Ensures padding and border are included in total size
//       overflow: hidden;
//       margin: 0px 22px;

//       // Change border color on input focus
//       &:focus-within {
//         border: 2px solid $grey; // Replace with your desired focus border color
//       }

//       > :first-child {
//         padding: 0px 12px;
//         cursor: pointer;
//       }

//       .close-button {
//         padding-right: 12px;

//         img {
//           cursor: pointer;
//         }
//       }

//       input {
//         box-sizing: border-box; // Includes padding and border in the element's dimensions
//         width: 100%; // Ensures input does not exceed parent width
//         padding: 14px 26px 14px 0px;

//         border: none;
//         outline: none;
//         @include para2-font;
//         color: $navy-blue-dark;

//         &::placeholder {
//           color: #b2b2b2;
//         }
//       }
//     }

//     /* Horizontal loading indicator styles */
//     .loading-indicator {
//       position: relative;
//       margin: 6px 0px;
//       height: 4px;
//       background-color: #f0f0f0; /* Light background */
//       overflow: hidden;

//       /* Animation keyframes */
//       @keyframes loading {
//         0% {
//           transform: translateX(-100%);
//         }
//         100% {
//           transform: translateX(100%);
//         }
//       }

//       &::before {
//         content: "";
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         background: linear-gradient(
//           to right,
//           rgba(24, 26, 83, 0.1) 25%,
//           /* Light navy blue */ rgba(24, 26, 83, 0.5) 50%,
//           /* Mid navy blue */ rgba(24, 26, 83, 0.1) 75% /* Light navy blue */
//         );
//         animation: loading 1.2s infinite;
//       }
//     }

//     .recent-text {
//       color: $dark-grey;
//       @include para3-font;
//       margin: 0;
//       padding: 0;
//       margin-top: 16px;
//     }

//     .history-list {
//       list-style: none;
//       margin: 0;
//       padding: 0;
//       height: 75vh;
//       overflow: scroll;
//       margin-bottom: 40px;

//       > :first-child {
//         margin-top: 16px;
//       }

//       li {
//         display: block;
//         color: $navy-blue;
//         @include para2-font;
//         margin-top: 22px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         gap: 26px;
//         span {
//           flex: 1;
//         }
//       }
//     }

//     .suggestion-listbox {
//       list-style: none;
//       margin: 0;
//       padding: 0;
//       height: 75vh;
//       overflow: scroll;
//       margin-bottom: 40px;

//       > :first-child {
//         margin-top: 21px;
//       }

//       li {
//         color: $navy-blue;
//         @include para2-font;
//         margin-top: 16px;

//         .toolName {
//           color: $dark-grey;
//           margin: 0;
//           padding: 0;
//           @include para2-font;
//           margin-bottom: 4px;
//         }
//       }
//     }

//     // mobile phone screens
//     .mobile-tabs {
//       @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//         margin: 24px 0px 20px !important;
//       }
//     }

//     .result-count {
//       @include para1-font;
//       color: $navy-blue;
//       margin: 0px 0px 24px 0px;
//       font-weight: 600;
//       @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//         padding: 0px 0px 20px 0px;
//         margin: 0;
//         color: $navy-blue;
//       }
//     }

//     .tabs {
//       margin: 32px 0 30px;
//       overflow: hidden;
//       white-space: nowrap;
//       overflow-x: auto;

//       @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//         margin: 0px;
//         > :first-child {
//           margin-left: 22px;
//         }

//         > :last-child {
//           margin-right: 10px;
//         }
//       }

//       &::-webkit-scrollbar-thumb {
//         background-color: transparent;
//       }

//       li {
//         color: $dark-grey;
//         padding: 10px 18px;
//         @include para1-font;
//         font-weight: 400;
//         cursor: pointer;
//         display: inline-block;
//         border-radius: 21px;
//         border: 1px solid #b2b2b2;

//         // small laptops screens
//         @media (min-width: $small-device-min) and (max-width: $small-device-max) {
//           padding: 10px 18px;
//         }

//         // tablet screens
//         @media (min-width: $tablet-min) and (max-width: $tablet-max) {
//           padding: 8px 14px;
//         }

//         // mobile phone screens
//         @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//           padding: 6px 18px;
//           border-radius: 20px;
//         }

//         &:not(:last-child) {
//           margin-right: 24px;

//           @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//             margin-right: 12px;
//           }
//         }

//         &.active {
//           color: $white;
//           font-weight: 600;
//           position: relative;
//           background-color: #0876f8;

//           &:hover {
//             color: $white;
//           }

//           &::after {
//             content: "";
//             position: absolute;
//             bottom: -8px;
//             border-color: $blue;

//             border-style: solid;
//             width: 100%;
//             left: 0;
//             right: 0;
//           }
//         }

//         &:hover {
//           color: $blue;
//           border: 1px solid $blue;
//         }
//       }
//     }

//     .tab-content {
//       h3 {
//         color: $navy-blue;
//         font-weight: 600;
//         margin-bottom: 40px;
//       }

//       .card {
//         padding: 16px;

//         &:hover {
//           .card-header {
//             h4 {
//               color: $blue;
//               text-decoration: underline;
//             }
//           }
//         }

//         &:not(:first-child) {
//           margin-top: 12px;
//         }

//         .card-header {
//           padding: 0;
//           background-color: transparent;
//           border-bottom: none;

//           h4 {
//             color: $navy-blue;
//             font-weight: 600;
//             margin-bottom: 0;
//           }
//         }

//         &:has(.card-content) .card-header {
//           h4 {
//             margin-bottom: 14px;
//             @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//               margin-bottom: 0px;
//             }
//           }
//         }

//         .card-content {
//           .des-1 {
//             color: $dark-grey;
//             @include truncate(2);
//           }
//         }
//       }
//     }

//     .tab-content {
//       @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//         h3 {
//           color: $dark-grey;
//           @include para2-font;
//           font-weight: 400;
//           margin-bottom: 18px;
//         }
//       }

//       .accordion {
//         .accordion-item {
//           border: 1px solid $white-grey;
//           border-radius: 12px;
//           -webkit-border-radius: 12px;
//           -moz-border-radius: 12px;
//           -ms-border-radius: 12px;
//           -o-border-radius: 12px;

//           &:has(.show) {
//             padding-bottom: 16px;
//           }

//           &:not(:first-child) {
//             margin-top: 12px;
//             border-top: 1px solid $white-grey;
//           }

//           .accordion-header {
//             &.remove-icon {
//               .accordion-button {
//                 &::after {
//                   display: none;
//                 }
//               }

//               &:hover {
//                 a {
//                   h4 {
//                     color: $blue;
//                     text-decoration: underline;
//                   }
//                 }
//               }
//             }
//             .accordion-button {
//               padding: 16px;
//               color: $navy-blue;
//               @include h4-font;
//               font-weight: 600;
//               text-decoration: none;
//               background-color: transparent;
//               align-items: baseline;
//               a {
//                 text-decoration: none;
//                 color: $navy-blue;
//                 h4 {
//                   &:hover {
//                     text-decoration: underline;
//                   }
//                 }
//               }

//               &.collapsed {
//                 margin-bottom: 0;
//               }

//               &:not(.collapsed) {
//                 box-shadow: none;
//               }

//               &:focus {
//                 box-shadow: none;
//               }

//               // &::after {
//               //   width: 12px;
//               //   height: 7px;
//               //   background-image: url(/icons/arrow-up.svg);
//               //   background-size: cover;
//               // }
//             }
//           }

//           .accordion-collapse {
//             .accordion-body {
//               color: $dark-grey;
//               @include para1-font;
//               padding: 0 16px 0;
//             }
//           }
//         }
//       }
//     }
//   }
// }

// .underline-on-hover:hover {
//   text-decoration: underline !important;
//   color: $blue !important;
// }

// .select-option-content {
//   @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//     @include truncate(1);
//     width: 80%;
//   }
//   @include h4-font;
//   color: $navy-blue;
//   margin: 7px 0px;

//   @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//     margin: 8px 0px;
//   }
// }

// .select-option-resource-type {
//   @media (min-width: $mobile-min) and (max-width: $mobile-max) {
//     position: absolute;
//     right: 12px;
//     bottom: 12px;
//     font-size: 10px;
//   }

//   color: $navy-blue;
//   padding: 4px 6px;
//   background: $white-grey;
//   border-radius: 4px;
//   opacity: 1;
//   position: absolute;
//   right: 12px;
//   bottom: 10px;
//   font-size: 12px;
// }

// .overview-truncated {
//   @include para1-font;
//   color: #585858;
//   // @include truncate(2);
//   // max-height: 48px;

//   // small laptops screens
//   @media (min-width: $small-device-min) and (max-width: $small-device-max) {
//     // max-height: 40px;
//   }

//   @media (min-width: $tablet-min) and (max-width: $tablet-max) {
//     // margin-bottom: 36px;
//   }
//   p {
//     margin-bottom: 0;
//   }
// }
