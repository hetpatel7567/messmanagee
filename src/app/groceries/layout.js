// src/app/groceries/layout.js
export default function GroceriesLayout({ children }) {
    return (
      <div>
        <h1>Groceries Management</h1>
        <main>{children}</main>
      </div>
    );
  }
  