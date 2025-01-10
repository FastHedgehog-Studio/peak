document.addEventListener("DOMContentLoaded", () => {
  if (!properties || !properties.propertyGroup) {
    console.error("Properties data is not available!");
    return;
  }

  const propertyGroup = properties.propertyGroup;

  let selectedTimeFrame = "monthly"; // Default time frame

  // Populate Group-Level Metrics into Charts
  const revenueChart = new Chart(document.getElementById("revenueChart"), {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Total Revenue",
          data: propertyGroup.metrics.revenue[selectedTimeFrame],
          backgroundColor: "#4caf50",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: "top" },
      },
    },
  });

  const costChart = new Chart(document.getElementById("costChart"), {
    type: "pie",
    data: {
      labels: ["Cleaning", "Electricity", "Maintenance", "Other"],
      datasets: [
        {
          data: propertyGroup.metrics.cost[selectedTimeFrame], // Example split for the first 4 cost categories
          backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#f44336"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: "top" },
      },
    },
  });

  const netIncomeChart = new Chart(document.getElementById("netIncomeChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Total Net Income",
          data: propertyGroup.metrics.netIncome[selectedTimeFrame],
          borderColor: "#2196f3",
          backgroundColor: "rgba(33, 150, 243, 0.2)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: "top" },
      },
    },
  });

  const occupancyChart = new Chart(document.getElementById("occupancyChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Average Occupancy (%)",
          data: propertyGroup.metrics.occupancy[selectedTimeFrame],
          borderColor: "#ff9800",
          backgroundColor: "rgba(255, 152, 0, 0.2)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: "top" },
      },
    },
  });

  // Function to render mini charts
  function renderMiniChart(canvas, data) {
    new Chart(canvas, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"], // Example labels
        datasets: [
          {
            data: data,
            backgroundColor: "#9fa8da",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
      },
    });
  }

  // Function to populate Properties Table
  function populatePropertiesTable() {
    const propertiesTable = document.getElementById("propertiesTable");
    propertiesTable.innerHTML = ""; // Clear existing rows

    // Add table header
    const headerRow = document.createElement("div");
    headerRow.className = "table-header";
    headerRow.innerHTML = `
      <div>Properties</div>
      <div>Occupancy</div>
      <div>Revenue</div>
      <div>Cost</div>
      <div>Net</div>
    `;
    propertiesTable.appendChild(headerRow);

    // Add property rows
    propertyGroup.properties.forEach((property) => {
      const row = document.createElement("div");
      row.className = "property-row";

      // Property Details Section
      const details = document.createElement("div");
      details.className = "property-details";
      details.innerHTML = `
        <img class="property-image" src="${property.imageUrl || "https://via.placeholder.com/120x100"}" alt="${property.name}">
        <div>
          <p class="property-name">${property.name}</p>
          <p class="property-address">${property.address}</p>
          <p>${property.type}</p>
          <div class="property-icons">
            <span><span class="icon material-icons">bed</span> ${property.bedrooms || "N/A"}</span>
            <span><span class="icon material-icons">bathtub</span> ${property.bathrooms || "N/A"}</span>
            <span><span class="icon material-icons">group</span> ${property.sleeps || "N/A"}</span>
          </div>
        </div>
      `;

      // Metrics Section
      const occupancy = document.createElement("div");
      occupancy.className = "property-metrics";
      occupancy.innerHTML = `
        <div>${property.metrics.occupancy[selectedTimeFrame][0]}% (${property.metrics.occupancy[selectedTimeFrame][1]})</div>
        <canvas class="mini-chart"></canvas>
      `;

      const revenue = document.createElement("div");
      revenue.className = "property-metrics";
      revenue.innerHTML = `
        <div>$${property.metrics.revenue[selectedTimeFrame][0]}</div>
        <canvas class="mini-chart"></canvas>
      `;

      const cost = document.createElement("div");
      cost.className = "property-metrics";
      cost.innerHTML = `
        <div>$${property.metrics.cost[selectedTimeFrame][0]}</div>
        <canvas class="mini-chart"></canvas>
      `;

      const netIncome = document.createElement("div");
      netIncome.className = "property-metrics";
      netIncome.innerHTML = `
        <div>$${property.metrics.netIncome[selectedTimeFrame][0]}</div>
        <canvas class="mini-chart"></canvas>
      `;

      // Append sections to row
      row.appendChild(details);
      row.appendChild(occupancy);
      row.appendChild(revenue);
      row.appendChild(cost);
      row.appendChild(netIncome);

      // Append row to table
      propertiesTable.appendChild(row);

      // Render mini charts
      renderMiniChart(occupancy.querySelector(".mini-chart"), property.metrics.occupancy[selectedTimeFrame]);
      renderMiniChart(revenue.querySelector(".mini-chart"), property.metrics.revenue[selectedTimeFrame]);
      renderMiniChart(cost.querySelector(".mini-chart"), property.metrics.cost[selectedTimeFrame]);
      renderMiniChart(netIncome.querySelector(".mini-chart"), property.metrics.netIncome[selectedTimeFrame]);
    });
  }

  // Handle Time Frame Dropdown Change
  const timeFrameDropdown = document.getElementById("timeFrameDropdown");
  timeFrameDropdown.addEventListener("change", (event) => {
    selectedTimeFrame = event.target.value;
    populatePropertiesTable(); // Re-render table rows
  });

  // Initial Render of Properties Table
  populatePropertiesTable();
});
