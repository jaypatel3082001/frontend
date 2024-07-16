import React from "react";

const ResultData = (resultdata) => {
  console.log("aa", resultdata[0]);
  console.log("aa", resultdata[0]);
  const formatData = () => {
    let formattedText = `
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Marksheet</title>
            <link
              href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
              rel="stylesheet"
            />
          </head>
          <body class="font-sans">
            <div class="container mx-auto border border-black p-5 w-11/12">
              <div class="text-center mb-5">
                <img src="https://png.pngtree.com/png-clipart/20230426/original/pngtree-school-logo-design-template-png-image_9104626.png" alt="Logo" class="h-24 w-24" />
                <h1 class="text-2xl font-bold my-2">CENTRAL BOARD OF HIGHER EDUCATION /CLONE</h1>
                <h3 class="text-xl">Central Hindu School</h3>
              </div>
            
              <p><strong>Student Name:</strong> ${resultdata[0]?.username}</p>
              <p><strong>Email:</strong> ${resultdata[0]?.email}</p>
              <p><strong>Date:</strong> ${resultdata[0]?.date}</p>
              <p><strong>Exam-Name:</strong> ${resultdata[0]?.QuizName}</p>
              <table class="w-full border-collapse border border-black mt-3">
                <thead>
                  <tr>
                    <th class="border border-black px-2 py-1">Subject Code</th>
                    <th class="border border-black px-2 py-1">Subject Name</th>
                    <th class="border border-black px-2 py-1">Min Marks</th>
                    <th class="border border-black px-2 py-1">Max Marks</th>
                    <th class="border border-black px-2 py-1">Marks Obtained</th>
                    <th class="border border-black px-2 py-1">Remark</th>
                  </tr>
                </thead>
                <tbody>`;

    resultdata[0]?.sectionwiseResult?.map((subject, index) => {
      formattedText += `
                  <tr
                    key=${index}
                    class="border-b border-gray-200 hover:bg-gray-200 w-full ${
                      index % 2 === 0 ? "bg-slate-50" : "bg-white"
                    }"
                  >
                    <td class="border border-black text-center p-2">${
                      index + 1
                    }</td>
                    <td class="border border-black px-2 py-1">${
                      subject.sectionname
                    }</td>
                    <td class="border border-black px-2 py-1">${
                      resultdata[0]?.sectionwiseTotalResult[index]
                        .sectionwisePassing
                    }</td>
                    <td class="border border-black px-2 py-1">${
                      resultdata[0]?.sectionwiseTotalResult[index].weitage
                    }</td>
                    <td class="border border-black px-2 py-1">${
                      subject.weitage
                    }</td>
                    <td class="border border-black px-2 py-1">${
                      subject.status
                    }</td>
                  </tr>`;
    });

    formattedText += `
                  <tr>
                    <td colspan="4" class="border border-black px-2 py-1">
                      <strong>Total</strong>
                    </td>
                    <td class="border border-black px-2 py-1"><strong>${resultdata[0]?.result}/${resultdata[0]?.TotalMarks}</strong></td>
                    <td class="border border-black px-2 py-1"></td>
                  </tr>
                </tbody>
              </table>
              <div class="text-center mt-2">
                <p><strong>Result:</strong> ${resultdata[0]?.finalStatus}</p>
              </div>
            </div>
          </body>
        </html>`;

    return formattedText;
  };
  return <>{formatData()}</>;
};

export default ResultData;
