import "../globals.css";
import { Sidebar } from "../../components/Sidebar";
import SessionProvider from "../../components/Providers/SessionProvider";
import { getServerSession } from "next-auth";
import authOptions from "../../utils/authOptions";

export default async function Layout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <main className="h-full flex bg-[#FAFAFB]">
            <Sidebar />

            <div className="flex-1">{children}</div>
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
