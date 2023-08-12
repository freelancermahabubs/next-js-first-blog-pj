
import TopNav from "@/components/TopNav";
import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.css";

export const metadata = {
  title: "mhabubblog",
  description: "mhabubblog",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
