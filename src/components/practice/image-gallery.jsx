import { Divider, Row } from "antd";
import { useEffect, useRef, useState } from "react";

//  FileList is:
// Not a regular array, but array-like

// Returned by <input type="file" /> when files are selected

// Contains multiple File objects (each representing an uploaded file)

// You can convert it to a real array using Array.from() or [...e.target.files]

const ImageGalleryUploader = () => {
  return (
    <div style={{ padding: "20px" }}>
      <InputFileBasics />

      <Divider>Local image gallery</Divider>
      <FullImageGallery />
    </div>
  );
};

const FullImageGallery = () => {
  const [images, setImages] = useState([{}]);
  // fileList is an data type in array after selecting files via input type file

  const handleImageUpload = (e) => {
    // console.log(e.target.fileList);
    const files = Array.from(e.target.files);
    // is it a data structure
    // console.log(files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // read file as base64
      reader.onloadend = () => {
        setImages((prev) => [
          ...prev,
          {
            name: file.name,
            type: file.type,
            lastModified: file.lastModified,
            base64: reader.result,
            created_date: Date.now(),
          },
        ]);
      };
    });
  };

  return (
    <>
      <h2>📷 Upload and Preview Local Images (Base64)</h2>
      <Row justify="space-between">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
        <label htmlFor="search">
          <input type="text" id="search" placeholder="search by name" />
        </label>
        <select
          value={""}
          onChange={(e) => {
            const sortBy = e.target.value;
            let sortedImages = [...images].sort((a, b) => {
              if (a.type !== sortBy && b.type === sortBy) return 1; // Move matching types first
              if (a.type === sortBy && b.type !== sortBy) return -1; // Move matching types first
              return 0; // Keep other items in the same order
            });
            setImages(sortedImages);
          }}
        >
          <option value={"image/jpeg"}>image/jpeg</option>
          <option value={"image/png"}>image/png</option>
        </select>
      </Row>
      <div style={styles.gallery}>
        {images.map((img, index) => (
          <div key={index} style={styles.card}>
            <p>{img.type}</p>
            <p>{new Date(img.lastModified).toLocaleDateString("en-IN")}</p>
            <p>{new Date(img.lastModified).toLocaleTimeString()}</p>
            <img src={img.base64} alt={img.name} style={styles.image} />
            <p>{img.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const styles = {
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    gap: "10px",
  },
  card: {
    width: "150px",
    textAlign: "center",
    border: "1px solid black",
    padding: "20px",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px",
  },
};

const InputFileBasics = () => {
  // basics
  //   enctype="multipart/form-data" is required to send files.

  // The name attribute is important; it's used by the backend to access the file.

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.dir(e.target[0].files[0]);
    const formData = new FormData();
    formData.append("file", e.target[0].files[0]);
    console.log(formData.get("file"));
    await fetch("https://your-api-endpoint/upload", {
      method: "POST",
      body: formData,
    });
  };
  const ref = useRef(null);
  return (
    <>
      <a href="https://chatgpt.com/c/688db0fd-6b68-8001-9f62-17238b8983a1">
        Learn file upload
      </a>
      <br />
      <a href="https://javascript.info/file">File</a>
      <Divider>Upload to endpoint </Divider>

      <form
        id="uploadForm"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label htmlFor="fileName">Upload file</label>
        <input type="file" id="fileName" name="myFile" />
        <button type="submit">Submit</button>
      </form>
      <Divider>Preview </Divider>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          const reader = new FileReader();

          reader.onload = function () {
            ref.current.src = reader.result;
          };
          reader.readAsDataURL(file);
        }}
      />
      <img ref={ref} id="preview" />
    </>
  );
};

export default ImageGalleryUploader;
