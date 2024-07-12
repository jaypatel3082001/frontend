import React from "react";

const Printpaper = () => {
  const fetchDataAndExport = async () => {
    // Step 1: Fetch data from the API
    const response = await fetch("YOUR_API_ENDPOINT");
    const data = await response.json();

    // Step 2: Format the data to match demo.txt
    const formattedData = formatData(data);

    // Step 3: Create a blob and trigger download
    downloadTxtFile(formattedData);
  };

  const formatData = (data) => {
    // Assuming data is an array of questions and options
    let formattedText =
      "                                                    EXAM\n\n\n";

    data.map((info, index) => {
      formattedText += `Section${index + 1}: ${info.quizename}\n\n`;

      {
        info.quizemcqs.map((question, ind) => {
          formattedText += `${index + 1}. ${question.question}\n`;
          formattedText += `A. ${question.option1}\n`;
          formattedText += `B. ${question.option2}\n`;
          formattedText += `C. ${question.option3}\n`;
          formattedText += `D. ${question.option4}\n`;

          formattedText += "\n";
        });
      }
    });

    return formattedText;
  };

  const downloadTxtFile = (formattedData) => {
    const blob = new Blob([formattedData], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "demo.txt";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={fetchDataAndExport}>Export Data</button>
    </div>
  );
};

export default Printpaper;
