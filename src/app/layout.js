// src/app/layout.js
export default function RootLayout({ children }) {
    return (
      <div>
        <header>
          <h1>Hostel Mess Management</h1>
        </header>
        <main>{children}</main> {/* All pages will be rendered here */}
        <footer>Footer content</footer>
      </div>
    );
  }
  