"use client";

import useSidebarStore from "../../store/sidebarStore";
import { NotificationBellIcon } from "../../assets/icons";
import CSVDropZone from "../../components/CSVDropzone";
import DataTable from "../../components/DataTable";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function Dashboard() {
  const [rowData, setRowData] = useState([]);
  const router = useRouter();
  const session = useSession();
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  //   useEffect(() => {
  console.log(session);
  if (session.status !== "authenticated") {
    router.push("/");
  }
  //   }, [session, router]);

  const handleFileDrop = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const wb = XLSX.read(data, { type: "binary" });

      // Get the first worksheet
      const ws = wb.Sheets[wb.SheetNames[0]];

      // Convert sheet data to an array of objects
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });

      // Console log the internal rows with their data
      console.log("Internal Rows:", rows);

      // Update the state with the parsed row data
      setRowData(rows);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <main className="h-full overflow-auto px-8 py-20">
      <header className="flex justify-between">
        <div className="bars md:hidden" onClick={toggleSidebar}>
          Menu
          <span className="relative !h-1 !w-8 bg-gray-700"></span>
          <span
            className={`!h-1 !w-8 bg-gray-700 ${
              isSidebarOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span className="!h-1 !w-8 bg-gray-700"></span>
        </div>
        <p>Upload CSV</p>
        <div className="icons">
          <NotificationBellIcon />
        </div>
      </header>
      <div className="flex flex-col justify-center items-center ">
        <CSVDropZone onFileDrop={handleFileDrop} />
        <DataTable rowData={rowData} />
      </div>
    </main>
  );
}
