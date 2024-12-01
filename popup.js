document.addEventListener("DOMContentLoaded", () => {
    const qrcodeContainer = document.getElementById("qrcode");
    const messageContainer = document.getElementById("message");
  
    // Get the current tab's URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        try {
          const url = new URL(tabs[0].url); // Extract the URL
          const websiteName = url.hostname;
  
          // Create the message
          const message = `Muskuraiye, Aap ${websiteName} pe hain`;
  
          // Display the message
          messageContainer.textContent = message;
          console.log("Hello")
          
          // Generate the QR code with the message
          const QR = new QRCode(qrcodeContainer, {
            text: message,
            width: 128,
            height: 128,
          });
          console.log(QR)
        } catch (error) {
          console.log("Error generating QR Code:", error);
        }
      }
    });
  });
  