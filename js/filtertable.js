document.addEventListener('DOMContentLoaded', () => {
    // Select and initialize all the tables that need sorting functionality
    const tables = ['.standingsTable', '.standingsTable2', '.conferencetable'];
    
    tables.forEach(tableClass => {
        const table = document.querySelector(tableClass);
        if (table) { // Ensure the table exists before proceeding
            const headers = table.querySelectorAll('th.sortable');
            let sortDirection = true; // true means ascending, false means descending

            headers.forEach((header, index) => {
                if (header.getAttribute('data-sortable') !== 'false') {
                    header.addEventListener('click', () => {
                        sortTable(table, index, sortDirection);
                        sortDirection = !sortDirection; // Toggle the sort direction for the next click
                        resetSortClasses(headers); // Reset sort classes for all headers
                        updateSortClasses(header, sortDirection); // Add the correct class to the clicked header
                    });
                }
            });
        }
    });
});

function sortTable(table, column, ascending) {
    const tbody = table.querySelector('tbody');
    const rowsArray = Array.from(tbody.querySelectorAll('tr'));

    rowsArray.sort((rowA, rowB) => {
        const cellA = rowA.querySelectorAll('td')[column].textContent.trim();
        const cellB = rowB.querySelectorAll('td')[column].textContent.trim();

        // Try parsing as a number
        const numA = parseFloat(cellA.replace(/[^0-9.-]/g, ''));
        const numB = parseFloat(cellB.replace(/[^0-9.-]/g, ''));

        if (!isNaN(numA) && !isNaN(numB)) {
            return ascending ? numA - numB : numB - numA;
        } else {
            return ascending ? cellA.localeCompare(cellB, undefined, {numeric: true}) : cellB.localeCompare(cellA, undefined, {numeric: true});
        }
    });

    tbody.innerHTML = ''; // Clear existing rows
    rowsArray.forEach(row => tbody.appendChild(row)); // Append sorted rows
}

function resetSortClasses(headers) {
    headers.forEach(header => {
        header.classList.remove('th-sort-asc', 'th-sort-desc');
    });
}

function updateSortClasses(header, ascending) {
    header.classList.add(ascending ? 'th-sort-asc' : 'th-sort-desc');
}
