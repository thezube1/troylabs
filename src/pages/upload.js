import styles from "@/styles/Upload.module.scss";
import { useState, useEffect } from "react";
import { getDocument } from "pdfjs-dist";
import Jobs from "@/utils/jobs";

function findCommonWords(string1, string2) {
  // Split the strings into words, convert to lowercase, and create sets for unique values
  const words1 = new Set(string1.toLowerCase().split(/\W+/));
  const words2 = new Set(string2.toLowerCase().split(/\W+/));

  // Filter words1 to only include words that are also in words2
  const commonWords = [...words1].filter((word) => words2.has(word));

  return commonWords;
}

// Example usage
const string1 = "This is a sample string with common words.";
const string2 = "Another string, but with some common elements.";

const commonWords = findCommonWords(string1, string2);
console.log(commonWords);

function Upload() {
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFileName(file ? file.name : "");
    const reader = new FileReader();

    reader.onload = async (event) => {
      const pdf = await getDocument(event.target.result).promise;
      let textContent = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const text = await page.getTextContent();
        textContent += text.items.map((item) => item.str).join(" ");
      }

      console.log(textContent); // This will log all the text content of the PDF

      for (i in jobs) {
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className="title">Upload Resume</div>
        <div className={styles.fileUploadWrapper}>
          <input
            type="file"
            id="file-upload"
            className={styles.fileUploadInput}
            onChange={handleFileChange}
            hidden
          />
          <label htmlFor="file-upload" className={styles.fileUploadButton}>
            {selectedFileName || "Choose a file..."}
          </label>
        </div>
      </div>
    </main>
  );
}

export default Upload;
