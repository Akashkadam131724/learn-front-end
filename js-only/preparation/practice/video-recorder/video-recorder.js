// Get elements
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const downloadBtn = document.getElementById("downloadBtn");
const preview = document.getElementById("preview");
const recorded = document.getElementById("recorded");
const status = document.getElementById("status");

let mediaRecorder;
let recordedChunks = [];

// Check for camera and microphone permissions
async function checkPermissions() {
  try {
    const cameraPermission = await navigator.permissions.query({
      name: "camera",
    });
    const microphonePermission = await navigator.permissions.query({
      name: "microphone",
    });

    if (
      cameraPermission.state === "granted" &&
      microphonePermission.state === "granted"
    ) {
      status.textContent =
        "Camera and microphone access granted. You can start recording.";
      startBtn.disabled = false;
    } else if (
      cameraPermission.state === "denied" ||
      microphonePermission.state === "denied"
    ) {
      status.textContent =
        "Access denied. Please allow camera and microphone permissions in browser settings.";
      startBtn.disabled = true;
    } else {
      status.textContent =
        "Access not granted yet. Please allow camera and microphone when prompted.";
      startBtn.disabled = false;
    }
  } catch (error) {
    status.textContent = "Unable to check permissions. " + error.message;
  }
}

// Start recording
startBtn.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    // Show live preview
    preview.srcObject = stream;

    // Initialize MediaRecorder
    mediaRecorder = new MediaRecorder(stream);

    // Collect video data chunks
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    // Handle stop event
    mediaRecorder.onstop = () => {
      const videoBlob = new Blob(recordedChunks, { type: "video/webm" });
      const videoUrl = URL.createObjectURL(videoBlob);
      recorded.src = videoUrl;
      recorded.style.display = "block";
      downloadBtn.href = videoUrl;
      downloadBtn.download = "recorded-video.webm";
      downloadBtn.disabled = false;

      // Stop all tracks to release the camera and microphone
      stream.getTracks().forEach((track) => track.stop());
    };

    // Start recording
    mediaRecorder.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
    status.textContent = "Recording...";
  } catch (error) {
    status.textContent = "Error starting recording: " + error.message;
  }
});

// Stop recording
stopBtn.addEventListener("click", () => {
  mediaRecorder.stop();
  startBtn.disabled = false;
  stopBtn.disabled = true;
  status.textContent = "Recording stopped. You can download the video.";
});

// Check permissions on page load
checkPermissions();
