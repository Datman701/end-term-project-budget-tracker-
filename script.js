// State management
let state = JSON.parse(localStorage.getItem('budgetTrackerState')) || {
    category_list: [],
    totalExpense_ofEachCatagory: [],
    expenseCounter_list: [],
    expenses: {}
};

// Currency data
const currencies = [
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "AFN", name: "Afghan Afghani" },
    { code: "ALL", name: "Albanian Lek" },
    { code: "AMD", name: "Armenian Dram" },
    { code: "ANG", name: "Netherlands Antillean Guilder" },
    { code: "AOA", name: "Angolan Kwanza" },
    { code: "ARS", name: "Argentine Peso" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "AWG", name: "Aruban Florin" },
    { code: "AZN", name: "Azerbaijani Manat" },
    { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
    { code: "BBD", name: "Barbadian Dollar" },
    { code: "BDT", name: "Bangladeshi Taka" },
    { code: "BGN", name: "Bulgarian Lev" },
    { code: "BHD", name: "Bahraini Dinar" },
    { code: "BIF", name: "Burundian Franc" },
    { code: "BMD", name: "Bermudan Dollar" },
    { code: "BND", name: "Brunei Dollar" },
    { code: "BOB", name: "Bolivian Boliviano" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "BSD", name: "Bahamian Dollar" },
    { code: "BTC", name: "Bitcoin" },
    { code: "BTN", name: "Bhutanese Ngultrum" },
    { code: "BWP", name: "Botswanan Pula" },
    { code: "BYN", name: "Belarusian Ruble" },
    { code: "BYR", name: "Belarusian Ruble (pre-2016)" },
    { code: "BZD", name: "Belize Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "CDF", name: "Congolese Franc" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "CLF", name: "Chilean Unit of Account (UF)" },
    { code: "CLP", name: "Chilean Peso" },
    { code: "CNH", name: "Chinese Yuan (Offshore)" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "COP", name: "Colombian Peso" },
    { code: "CRC", name: "Costa Rican Colón" },
    { code: "CUC", name: "Cuban Convertible Peso" },
    { code: "CUP", name: "Cuban Peso" },
    { code: "CVE", name: "Cape Verdean Escudo" },
    { code: "CZK", name: "Czech Republic Koruna" },
    { code: "DJF", name: "Djiboutian Franc" },
    { code: "DKK", name: "Danish Krone" },
    { code: "DOP", name: "Dominican Peso" },
    { code: "DZD", name: "Algerian Dinar" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "ERN", name: "Eritrean Nakfa" },
    { code: "ETB", name: "Ethiopian Birr" },
    { code: "EUR", name: "Euro" },
    { code: "FJD", name: "Fijian Dollar" },
    { code: "FKP", name: "Falkland Islands Pound" },
    { code: "GBP", name: "British Pound Sterling" },
    { code: "GEL", name: "Georgian Lari" },
    { code: "GGP", name: "Guernsey Pound" },
    { code: "GHS", name: "Ghanaian Cedi" },
    { code: "GIP", name: "Gibraltar Pound" },
    { code: "GMD", name: "Gambian Dalasi" },
    { code: "GNF", name: "Guinean Franc" },
    { code: "GTQ", name: "Guatemalan Quetzal" },
    { code: "GYD", name: "Guyanaese Dollar" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "HNL", name: "Honduran Lempira" },
    { code: "HRK", name: "Croatian Kuna" },
    { code: "HTG", name: "Haitian Gourde" },
    { code: "HUF", name: "Hungarian Forint" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "ILS", name: "Israeli New Sheqel" },
    { code: "INR", name: "Indian Rupee" },
    { code: "IQD", name: "Iraqi Dinar" },
    { code: "IRR", name: "Iranian Rial" },
    { code: "ISK", name: "Icelandic Króna" },
    { code: "JMD", name: "Jamaican Dollar" },
    { code: "JOD", name: "Jordanian Dinar" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "KES", name: "Kenyan Shilling" },
    { code: "KGS", name: "Kyrgystani Som" },
    { code: "KHR", name: "Cambodian Riel" },
    { code: "KMF", name: "Comorian Franc" },
    { code: "KRW", name: "South Korean Won" },
    { code: "KWD", name: "Kuwaiti Dinar" },
    { code: "KYD", name: "Cayman Islands Dollar" },
    { code: "KZT", name: "Kazakhstani Tenge" },
    { code: "LAK", name: "Laotian Kip" },
    { code: "LBP", name: "Lebanese Pound" },
    { code: "LKR", name: "Sri Lankan Rupee" },
    { code: "LRD", name: "Liberian Dollar" },
    { code: "LSL", name: "Lesotho Loti" },
    { code: "LYD", name: "Libyan Dinar" },
    { code: "MAD", name: "Moroccan Dirham" },
    { code: "MDL", name: "Moldovan Leu" },
    { code: "MGA", name: "Malagasy Ariary" },
    { code: "MKD", name: "Macedonian Denar" },
    { code: "MMK", name: "Myanma Kyat" },
    { code: "MNT", name: "Mongolian Tugrik" },
    { code: "MOP", name: "Macanese Pataca" },
    { code: "MRU", name: "Mauritanian Ouguiya" },
    { code: "MUR", name: "Mauritian Rupee" },
    { code: "MVR", name: "Maldivian Rufiyaa" },
    { code: "MWK", name: "Malawian Kwacha" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "NAD", name: "Namibian Dollar" },
    { code: "NGN", name: "Nigerian Naira" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "OMR", name: "Omani Rial" },
    { code: "PEN", name: "Peruvian Nuevo Sol" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "QAR", name: "Qatari Rial" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "THB", name: "Thai Baht" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "USD", name: "United States Dollar" },
    { code: "VND", name: "Vietnamese Dong" },
    { code: "ZAR", name: "South African Rand" },
    { code: "ZMW", name: "Zambian Kwacha" }
];

// DOM Elements
const addCategoryBtn = document.querySelector(".add-category");
const categoryDiv = document.querySelector(".categoryDiv");
const submitButton = document.querySelector("#submit-button");
const categoryInput = document.querySelector("#category-input");

// Chart initialization
let ctx = document.getElementById("expenseChart").getContext("2d");
let expenseChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [
                "#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800",
                "#9C27B0", "#795548", "#607D8B", "#E91E63", "#2196F3"
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: "bottom" }
        }
    }
});

// Update functions
function updateState() {
    localStorage.setItem('budgetTrackerState', JSON.stringify(state));
    updateChart();
    updateTotalExpenses();
    updateCategoryDropdown();
}

function updateChart() {
    expenseChart.data.labels = state.category_list;
    expenseChart.data.datasets[0].data = state.totalExpense_ofEachCatagory;
    expenseChart.update();
}

function updateTotalExpenses() {
    const total = state.totalExpense_ofEachCatagory.reduce((sum, val) => sum + val, 0);
    document.getElementById("total-expenses-summary").textContent = `${total.toFixed(2)}`;
}

function updateCategoryDropdown() {
    const dropdown = document.querySelector("#category");
    dropdown.innerHTML = '<option value="">Select Category</option>';
    state.category_list.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        dropdown.appendChild(option);
    });
}

// Currency conversion
async function convertCurrency(from, to, value) {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/16331d695b53cec4e0b8d079/pair/${from}/${to}/${value}`);
        if (!response.ok) throw new Error('Currency conversion failed');
        const data = await response.json();
        return data.conversion_result;
    } catch (error) {
        console.error('Currency conversion error:', error);
        alert('Currency conversion failed. Please try again.');
        return null;
    }
}

// Initialize currencies
function initializeCurrencyDropdowns() {
    const currencyDropdown = document.getElementById("currency-dropdown");
    const preferredCurrency = document.getElementById("preferred-currency");
    
    // Clear existing options

    
    // Add currencies to both dropdowns
    currencies.forEach(currency => {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        
        option1.value = option2.value = currency.code;
        option1.textContent = option2.textContent = `${currency.name} (${currency.code})`;
        
        currencyDropdown.appendChild(option1);
        preferredCurrency.appendChild(option2);
    });

    // Initialize Tom Select
    new TomSelect("#currency-dropdown", {
        create: false,
        sortField: { field: "text", direction: "asc" }
    });

    new TomSelect("#preferred-currency", {
        create: false,
        sortField: { field: "text", direction: "asc" }
    });
}

// Category card creation
function createCategoryCard(category) {
    const card = document.createElement("div");
    card.className = "mb-6";
    card.innerHTML = `
        <div class="expense-card h-full bg-gray-900 p-6 ring-1 shadow-2xl ring-gray-900/10 sm:p-8 rounded-3xl" data-category="${category}">
            <h3 class="text-lg font-semibold text-indigo-400 border-b pb-2">${category}</h3>
            <div class="mt-4 text-gray-300 text-sm font-medium max-h-60 overflow-y-auto" id="to-edit">
            </div>
            <div class="mt-4">
                <div class="total-expense mt-4 p-3 bg-gray-800 text-white rounded-lg text-center">
                    <span class="text-lg font-semibold">Total Expense:</span>
                    <span class="total-value text-xl font-bold text-red-400">0.00</span>
                </div>
                <div class="mt-4">
                    <label class="text-white">Select an expense to delete:</label>
                    <select class="expenseDropdown bg-gray-800 text-white px-2 py-1 rounded-md w-full mt-2">
                        <option value="">-- Select Expense --</option>
                    </select>
                    <button class="delete-expense bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-400 mt-2 w-full">
                        Delete Selected Expense
                    </button>
                </div>
                <button class="delete bg-red-700 px-4 py-2 text-white rounded-md hover:bg-red-600 mt-4 w-full">
                    Delete Category
                </button>
            </div>
        </div>
    `;
    return card;
}

// Event handlers
function handleRemoval(card) {
    const deleteButton = card.querySelector(".delete");
    const categoryName = card.querySelector(".expense-card").dataset.category;

    deleteButton.addEventListener("click", () => {
        const categoryIndex = state.category_list.indexOf(categoryName);
        if (categoryIndex !== -1) {
            state.category_list.splice(categoryIndex, 1);
            state.totalExpense_ofEachCatagory.splice(categoryIndex, 1);
            state.expenseCounter_list.splice(categoryIndex, 1);
            delete state.expenses[categoryName];
        }
        card.remove();
        updateState();
    });
}

function handleExpenseDeletion(card) {
    const deleteButton = card.querySelector(".delete-expense");
    const dropdown = card.querySelector(".expenseDropdown");
    const categoryName = card.querySelector(".expense-card").dataset.category;

    deleteButton.addEventListener("click", () => {
        const selectedValue = dropdown.value;
        if (!selectedValue) {
            alert("Please select an expense to delete");
            return;
        }

        const categoryIndex = state.category_list.indexOf(categoryName);
        if (!state.expenses[categoryName]) return;

        const expenseIndex = state.expenses[categoryName].findIndex(e => e.id === parseInt(selectedValue));
        if (expenseIndex === -1) return;

        const expense = state.expenses[categoryName][expenseIndex];
        state.totalExpense_ofEachCatagory[categoryIndex] -= expense.amount;
        state.expenses[categoryName].splice(expenseIndex, 1);

        // Update UI
        card.querySelector(`[data-id="${selectedValue}"]`).remove();
        dropdown.querySelector(`option[value="${selectedValue}"]`).remove();
        card.querySelector(".total-value").textContent = 
            `${state.totalExpense_ofEachCatagory[categoryIndex].toFixed(2)}`;

        updateState();
    });
}

// Add Category Event Handler
addCategoryBtn.addEventListener("click", () => {
    const categoryName = categoryInput.value.trim();
    
    if (!categoryName) {
        alert("Please enter a category name");
        return;
    }

    if (state.category_list.includes(categoryName)) {
        alert("This category already exists");
        return;
    }

    // Update state
    state.category_list.push(categoryName);
    state.totalExpense_ofEachCatagory.push(0);
    state.expenseCounter_list.push(0);
    state.expenses[categoryName] = [];

    // Create and add card
    const card = createCategoryCard(categoryName);
    categoryDiv.appendChild(card);
    
    // Add event handlers
    handleRemoval(card);
    handleExpenseDeletion(card);

    // Clear input and update state
    categoryInput.value = "";
    updateState();
});

// Submit Expense Event Handler
submitButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const expense = document.getElementById("expense-name").value.trim();
    const amount = document.getElementById("amount-spent").value.trim();
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const currency = document.querySelector("#currency-dropdown").tomselect.getValue();
    const preferredCurr = document.querySelector("#preferred-currency").tomselect.getValue();


    console.log(expense)
    console.log(amount)
    console.log(date)
    console.log(category)
    console.log(currency)
    console.log(preferredCurr)

    // Validation
    if (!expense || !amount || !date || !category || !currency || !preferredCurr) {
        alert("Please fill in all fields");
        return;
    }

    const convertedAmount = await convertCurrency(currency, preferredCurr, amount);
    if (convertedAmount === null) return;

    const categoryIndex = state.category_list.indexOf(category);
    if (categoryIndex === -1) return;

    // Update state
    state.expenseCounter_list[categoryIndex]++;
    const expenseId = state.expenseCounter_list[categoryIndex];
    
    state.totalExpense_ofEachCatagory[categoryIndex] += convertedAmount;
    
    if (!state.expenses[category]) {
        state.expenses[category] = [];
    }
    
    state.expenses[category].push({
        id: expenseId,
        name: expense,
        amount: convertedAmount,
        date: date,
        currency: preferredCurr
    });

    // Update UI
    const categoryCard = document.querySelector(`[data-category="${category}"]`);
    const expensesContainer = categoryCard.querySelector("#to-edit");
    const dropdown = categoryCard.querySelector(".expenseDropdown");

    // Add expense row
    const expenseRow = document.createElement("div");
    expenseRow.classList.add("expense-row", "grid", "grid-cols-4", "gap-4", "mb-2");
    expenseRow.setAttribute("data-id", expenseId);
    expenseRow.innerHTML = `
        <div>${expenseId}</div>
        <div>${expense}</div>
        <div>${convertedAmount.toFixed(2)} ${preferredCurr}</div>
        <div>${date}</div>
    `;
    expensesContainer.appendChild(expenseRow);

    // Add to dropdown
    const option = document.createElement("option");
    option.value = expenseId;
    option.textContent = `#${expenseId}`;
    dropdown.appendChild(option);

    // Update total
    categoryCard.querySelector(".total-value").textContent = 
        `${state.totalExpense_ofEachCatagory[categoryIndex].toFixed(2)}`;

    // Clear form
    document.getElementById("expense-name").value = "";
    document.getElementById("amount-spent").value = "";
    document.getElementById("date").value = "";
    document.getElementById("category").value = "";

    

    updateState();
});

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
    initializeCurrencyDropdowns();
    
    // Restore previous state
    state.category_list.forEach((category, index) => {
        const card = createCategoryCard(category);
        categoryDiv.appendChild(card);
        handleRemoval(card);
        handleExpenseDeletion(card);
        
        if (state.expenses[category]) {
            const cardToEdit = card.querySelector("#to-edit");
            const dropdown = card.querySelector(".expenseDropdown");
            
            state.expenses[category].forEach(expense => {
                // Create expense row
                const expenseRow = document.createElement("div");
                expenseRow.classList.add("expense-row", "grid", "grid-cols-4", "gap-4", "mb-2");
                expenseRow.setAttribute("data-id", expense.id);
                expenseRow.innerHTML = `
                    <div>${expense.id}</div>
                    <div>${expense.name}</div>
                    <div>${expense.amount.toFixed(2)} ${expense.currency}</div>
                    <div>${expense.date}</div>
                `;
                cardToEdit.appendChild(expenseRow);

                // Add to dropdown
                const option = document.createElement("option");
                option.value = expense.id;
                option.textContent = `#${expense.id}`;
                dropdown.appendChild(option);
            });

            // Update total
            card.querySelector(".total-value").textContent = 
                `${state.totalExpense_ofEachCatagory[index].toFixed(2)}`;
        }
    });

    updateChart();
    updateTotalExpenses();
    updateCategoryDropdown();
});