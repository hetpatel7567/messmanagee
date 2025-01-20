// src/app/dashboard/layout.js
export default function DashboardLayout({ children }) {
    return (
      <div>
        {/* You can add your layout structure here like headers, footers, etc. */}
        <header>
          <h1>Dashboard</h1>
        </header>
        <main>{children}</main> {/* Render child pages here */}
      </div>
    );
  }
  