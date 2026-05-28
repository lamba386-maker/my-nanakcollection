import "./globals.css"

export const metadata = {
  title: "Nanak Collection - Heritage-Driven Fashion",
  description: "Premium men's and kids fashion crafted with timeless elegance and heritage-inspired luxury.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0f2147] text-white font-sans">{children}</body>
    </html>
  )
}
