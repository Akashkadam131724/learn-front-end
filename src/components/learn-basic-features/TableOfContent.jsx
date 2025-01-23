import React, { useEffect, useState, useRef } from "react";

const TableOfContentV2 = ({ blog }) => {
  const [activeSection, setActiveSection] = useState("");
  const [maxHeight, setMaxHeight] = useState("auto");
  const [miniBannerHeight, setMiniBannerHeight] = useState("0px");

  const tocRef = useRef(null);

  const handleScroll = () => {
    const sectionElements = document.querySelectorAll("section");
    let currentSection = "";
    let closestDistance = Number.POSITIVE_INFINITY; // Initialize with a very large value

    // Find the closest section in the viewport
    sectionElements.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < closestDistance) {
        closestDistance = rect.top; // Update the closest section
        currentSection = section.id;
      }
    });

    // console.log(currentSection, "currentSection");
    setActiveSection(currentSection);

    // Find the corresponding TOC item
    const tocItem = document.querySelector(
      `.toc li[data-id="${currentSection}"]`
    );

    // Check if the TOC item is outside the viewport, then scroll to it
    if (tocItem) {
      const tocRect = tocItem.getBoundingClientRect();
      const isInViewport =
        tocRect.top >= 0 &&
        tocRect.left >= 0 &&
        tocRect.bottom <= window.innerHeight &&
        tocRect.right <= window.innerWidth;

      if (isInViewport) {
        tocItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }
    }
  };

  // Attach scroll listener to the window
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      const banner = document.querySelector("#blog-mini-banner");
      const contentHead = document.querySelector("#content-heading");

      if (!banner || !contentHead) return; // Ensure elements are available

      const bannerHeight = banner.offsetHeight || 0;
      const contentHeadHeight = contentHead.offsetHeight || 0;
      const computedStyle = getComputedStyle(contentHead);
      const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
      const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;

      const totalHeight = contentHeadHeight + paddingTop + paddingBottom;
      setMiniBannerHeight(`${bannerHeight}px`);
      setMaxHeight(`calc(100vh - ${bannerHeight}px - ${totalHeight}px - 10vh)`);
    };

    // Observe DOM changes and update height
    const observer = new MutationObserver(() => {
      updateHeight();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial update and scroll listener
    updateHeight();
    window.addEventListener("scroll", updateHeight);

    return () => {
      window.removeEventListener("scroll", updateHeight);
      observer.disconnect(); // Disconnect observer when component unmounts
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const banner = document.querySelector("#blog-mini-banner"); // Get the banner element

    if (section) {
      // Calculate the scroll offset if the banner exists
      const bannerHeight = banner ? banner.offsetHeight : 0;

      // Scroll the section into view with an offset or normally if no banner
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", // Start from the top of the section
      });

      // Adjust scroll position if banner exists
      if (bannerHeight > 0) {
        const topOffset = 20; // Add 20px or any height you want as an offset
        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY -
          (bannerHeight + topOffset);
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth", // Add smooth scrolling
        });
      }

      // If no banner exists, simply scroll to the section normally
      else {
        section.scrollIntoView();
      }

      setActiveSection(id); // Immediately set the clicked section as active
    }
  };

  let items = [...blog?.blog_sections]?.sort(
    (a, b) => a?.sort_order - b?.sort_order
  );

  if (blog?.blog_resource?.length > 0) {
    items?.push({ section_title: "Related Resources" });
  }

  return (
    <div
      ref={tocRef}
      className="toc table-of-contents-v2 hidden-mobile"
      style={{
        top: miniBannerHeight,
      }}
    >
      <h3 id="content-heading">Table of Contents</h3>
      <ul
        style={{
          height: maxHeight,
        }}
      >
        {items.map((section) => (
          <li
            key={section.section_title}
            data-id={section.section_title}
            className={activeSection === section.section_title ? "active" : ""}
            onClick={() => scrollToSection(section.section_title)}
            style={{ wordBreak: "normal" }}
          >
            {section.section_title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContentV2;
