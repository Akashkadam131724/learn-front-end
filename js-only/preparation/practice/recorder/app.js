// Get elements
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

const resetPermissionBtn = document.getElementById("resetPermissionBtn");
const audioPlayer = document.getElementById("audioPlayer");
const status = document.getElementById("status");

let mediaRecorder;
let audioChunks = [];

// Check microphone permission status
async function checkMicrophonePermission() {
  try {
    const permissionStatus = await navigator.permissions.query({
      name: "microphone",
    });

    if (permissionStatus.state === "granted") {
      status.textContent =
        "Microphone access granted. You can start recording.";
      startBtn.disabled = false;
      resetPermissionBtn.style.display = "none"; // Hide reset button
    } else if (permissionStatus.state === "denied") {
      status.textContent =
        "Microphone access denied. Please reset permissions in browser settings.";
      startBtn.disabled = true;
      resetPermissionBtn.style.display = "inline-block"; // Show reset button
    } else {
      status.textContent =
        "Microphone access not granted yet. Please allow access when prompted.";
      startBtn.disabled = false;
      resetPermissionBtn.style.display = "none"; // Hide reset button
    }

    // Listen for changes in permission state
    permissionStatus.onchange = () => checkMicrophonePermission();
  } catch (error) {
    status.textContent =
      "Unable to check microphone permissions. " + error.message;
  }
}

// Request microphone access and start recording
startBtn.addEventListener("click", () => {
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then((stream) => {
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioPlayer.src = audioUrl;
        audioChunks = [];
      };

      mediaRecorder.start();
      startBtn.disabled = true;
      stopBtn.disabled = false;
      status.textContent = "Recording...";
    })
    .catch((error) => {
      if (error.name === "NotAllowedError") {
        status.textContent =
          "Microphone access denied. Please reset permissions in browser settings.";
        resetPermissionBtn.style.display = "inline-block"; // Show reset button
      } else if (error.name === "NotFoundError") {
        status.textContent =
          "No microphone found. Please connect a microphone.";
      } else {
        status.textContent = "Error: " + error.message;
      }
    });
});

// Stop recording
stopBtn.addEventListener("click", () => {
  mediaRecorder.stop();
  startBtn.disabled = false;
  stopBtn.disabled = true;
  status.textContent = "Recording stopped. You can play it back.";
});

// Guide user to reset permissions
resetPermissionBtn.addEventListener("click", () => {
  alert(
    "To reset microphone permissions:\n" +
      "1. Click on the lock icon in the browser address bar.\n" +
      "2. Find 'Microphone' settings.\n" +
      "3. Reset the permission or allow the microphone.\n" +
      "4. Reload this page."
  );
});

// Check microphone permission on load
checkMicrophonePermission();
