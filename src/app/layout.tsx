import "./globals.css";

export const metadata = {
  title: "Sthefany Angeles - Interactive 3D Resume",
  description: "Frontend Developer & UI/UX Designer - Interactive 3D Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white antialiased overflow-hidden">
        <main className="w-full h-screen">{children}</main>
      </body>
    </html>
  );
}
