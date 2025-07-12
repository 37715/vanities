import "../styles/globals.css"; // Tailwind base styles

export const metadata = {
  title: "vanities",
  description: "the plugin discovery platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
