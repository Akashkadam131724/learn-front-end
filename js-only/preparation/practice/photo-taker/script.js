// Elements
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const captureBtn = document.getElementById("capture-btn");
const gallery = document.getElementById("gallery");

// Start camera
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error("Camera access denied:", err);
  });

// Capture photo
captureBtn.addEventListener("click", () => {
  // Set canvas dimensions and draw the video frame
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert canvas to image
  const imageData = canvas.toDataURL("image/png");

  // Create an image element and add to the gallery
  const img = document.createElement("img");
  img.src = imageData;
  img.alt = "Captured Photo";
  img.className = "gallery-image";

  // Add image to gallery
  const galleryItem = document.createElement("div");
  galleryItem.className = "gallery-image";
  galleryItem.appendChild(img);
  gallery.appendChild(galleryItem);
});
