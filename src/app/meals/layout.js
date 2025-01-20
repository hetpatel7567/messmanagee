// src/app/meals/layout.js
export default function MealsLayout({ children }) {
    return (
      <div>
        {/* You can add a header or sidebar specific to the Meals section */}
        <header>
          <h1>Meal Planning</h1>
          <nav>
            {/* Navigation links specific to meals */}
            <a href="/meals/meal-plans">Meal Plans</a> | <a href="/meals/recipes">Recipes</a>
          </nav>
        </header>
        <main>{children}</main> {/* Render child pages here */}
      </div>
    );
  }
  