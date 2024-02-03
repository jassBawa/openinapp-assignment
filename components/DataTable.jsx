// DataTable.js
import Link from "next/link";
import React, { useState } from "react";

const DataTable = ({ rowData }) => {
  // Render your table based on the data

  // const [localData, setLocalData] = useState(rowData);

  if (rowData.length === 0 || !rowData) {
    return;
  }

  const initialTags = rowData[1][3].split(",");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [dataArray, setDataArray] = useState(rowData);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [tagsMap, setTagsMap] = useState(new Map());

  const headers = rowData[0]; // Assume the first row contains headers

  const handleDropdownChange = (rowIndex, selectedValue) => {
    // logic to change state here
  };

  console.log(dataArray);

  return (
    <div className="w-full mt-12 ">
      <h3 className="text-3xl font-semibold">Uploads</h3>
      <div className="relative bg-gray-200 tableContainer mt-4  h-96 overflow-y-scroll overflow-x-scroll md:w-full whitespace-no-wrap ">
        <div className="sticky top-0 headersrow grid grid-cols-5 w-full text-left text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-100">
          {headers?.map((header, index) => (
            <div key={index} className=" px-4 py-3">
              {header}
            </div>
          ))}
        </div>
        <div className="bg-gray-200 mt-4 flex flex-col px-4 gap-4 overflow-y-scroll w-full">
          {dataArray.slice(1).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="bg-white grid grid-cols-5 items-center justify-start py-4 pl-4 rounded-lg"
            >
              <div className="col-span-1">{row[0]}</div>
              <div className="col-span-1">
                <Link
                  className="text-blue-400 underline"
                  target="_blank"
                  href={`http://www.${row[1]}`}
                >
                  www.{row[1]}
                </Link>
              </div>
              <div className="col-span-1">{row[2]}</div>
              <div className="col-span-1">
                <select
                  onChange={(e) =>
                    handleDropdownChange(rowIndex + 1, e.target.value)
                  }
                  className="border px-2 py-2 rounded"
                >
                  {initialTags.map((option, optionIndex) => (
                    <option key={optionIndex} value={option} className="">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                {tagsMap[rowIndex] && (
                  <span className="badge">{`f ${tagsMap[rowIndex]} `}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataTable;
