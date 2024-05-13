/**
 * Sorts a HTML table.
 *
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending
 */
function sortTableByColumn(table, column, asc = true) {
	const dirModifier = asc ? 1 : -1;
	const tBody = table.tBodies[0];
	const rows = Array.from(tBody.querySelectorAll("tr"));

	// Sort each row
	const sortedRows = rows.sort((a, b) => {
		const aColText = a.querySelector(`td:nth-child(${column + 1})`).textContent.trim();
		const bColText = b.querySelector(`td:nth-child(${column + 1})`).textContent.trim();

		return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
	});

	// Remove all existing TRs from the table
	while (tBody.firstChild) {
		tBody.removeChild(tBody.firstChild);
	}

	// Re-add the newly sorted rows
	tBody.append(...sortedRows);

	// Remember how the column is currently sorted
	table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
	table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
	table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".teamstats th").forEach(headerCell => {
	headerCell.addEventListener("click", () => {
		const tableElement = headerCell.parentElement.parentElement.parentElement;
		const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
		const currentIsAscending = headerCell.classList.contains("th-sort-asc");

		sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
	});
});



const data = {
	backgroundColor: 'whitesmoke', 
	labels: ['Luka Doncic | DAL', 'Giannis Antetokounmpo | MIL', 'Shai Gilgeous-Alexander | OKC', 'Jalen Brunson | NYK', 'Kevin Durant | PHX'],
	datasets: [{
	  label: 'Points Per Game',
	  data: [33.9, 30.4, 30.1, 28.7, 27.1],
	  backgroundColor: [
		'rgba(0, 83, 188, 0.2)',
		'rgba(0, 71, 27, 0.2)',
		'rgba(0, 125, 195, 0.2)',
		'rgba(245, 132, 38, 0.2)',
		'rgba(29, 17, 96, 0.2)',
	  ],
	  borderColor: [
		'rgba(0, 83, 188, 3)',
		'rgba(0, 71, 27, 3)',
		'rgba(0, 125, 195, 3)',
		'rgba(245, 132, 38, 3)',
		'rgba(29, 17, 96, 3)',
	  ],
	  borderWidth: 1
	}]
  };

  // config 
  const config = {
	type: 'bar',
	data,
	options: {
		indexAxis: 'y',
	  scales: {
		y: {
		  beginAtZero: true
		}
	  }
	}
  };

  // render init block
  const myChart = new Chart(
	document.getElementById('ppgchart'), 
	config
  );
  
  // Instantly assign Chart.js version
  const chartVersion = document.getElementById('chartVersion');
  chartVersion.innerText = Chart.version;

  
 
 
  function gamehighlights(links) {
	document.querySelector(".slider").src = links;
  }