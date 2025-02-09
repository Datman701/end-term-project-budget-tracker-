# Budget Tracker

## Overview
The Budget Tracker is a simple web application that allows users to track their expenses, categorize spending, and view a graphical representation of their expenses. It supports multiple currencies and stores data using local storage.

## Features
- **Add Expenses**: Users can input expenses with a name, amount, category, and currency.
- **Currency Conversion**: Expenses can be converted to a preferred currency using real-time exchange rates.
- **Data Persistence**: Uses local storage to maintain expense history even after page refresh.
- **Chart Representation**: Displays expenses in a pie chart for easy visualization.
- **Total Expense Calculation**: Automatically calculates and displays the total expenses.
- **Category-Based Filtering**: Users can filter expenses by category.

## Technologies Used
- **HTML, CSS, JavaScript** for frontend development
- **Chart.js** for visual representation of expenses
- **LocalStorage** for saving user data persistently
- **ExchangeRate-API** for real-time currency conversion

## Usage
1. Select your preferred currency.
2. Add an expense by filling out the expense name, amount, category, and currency.
3. Click "Add Expense" to save it.
4. View expenses in the chart and total expenses section.
5. Change currency preference to see expenses converted in real time.
6. Filter expenses by category using the dropdown menu.

## API Usage
- **Exchange Rate API**: Used for currency conversion.
  - API Endpoint:
    ```
    https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/{from}/{to}/{amount}
    ```

## Future Enhancements
- Add user authentication for personalized budget tracking.
- Implement income tracking for better financial management.
- Export expense reports as CSV or PDF.
- Add a dark mode theme for better UI experience.
- implement a better preffered currency method




