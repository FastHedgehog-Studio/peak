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

  // Function to populate Properties Table
  function populatePropertiesTable() {
    const propertiesTable = document.getElementById("propertiesTable");
    propertiesTable.innerHTML = ""; // Clear existing table rows

    // Add table header
    const headerRow = document.createElement("div");
    headerRow.className = "table-header";
    headerRow.innerHTML = `
      <div>Property</div>
      <div>Metrics</div>
      <div>Icons</div>
    `;
    propertiesTable.appendChild(headerRow);

    // Add property rows
    propertyGroup.properties.forEach((property) => {
      const row = document.createElement("div");
      row.className = "property-row";

      const image = document.createElement("div");
      image.innerHTML = `<img class="property-image" src="${property.imageUrl || "https://via.placeholder.com/120x100"}" alt="${property.name}">`;

      const details = document.createElement("div");
      details.className = "property-details";
      details.innerHTML = `
        <p class="property-name">${property.name}</p>
        <p class="property-address">${property.address}</p>
        <p>${property.type}</p>
      `;

      const metrics = document.createElement("div");
      metrics.className = "property-metrics";
      metrics.innerHTML = `
        <div class="metric-item">${property.metrics.occupancy[selectedTimeFrame][0]}%<br><small>Occupancy</small></div>
        <div class="metric-item">$${property.metrics.revenue[selectedTimeFrame][0]}<br><small>Revenue</small></div>
        <div class="metric-item">$${property.metrics.cost[selectedTimeFrame][0]}<br><small>Cost</small></div>
        <div class="metric-item">$${property.metrics.netIncome[selectedTimeFrame][0]}<br><small>Net Income</small></div>
      `;

      const icons = document.createElement("div");
      icons.className = "property-icons";
      icons.innerHTML = `
        <span><span class="icon material-icons">bed</span> ${property.bedrooms || "N/A"}</span>
        <span><span class="icon material-icons">king_bed</span> ${property.beds || "N/A"}</span>
      `;

      row.appendChild(image);
      row.appendChild(details);
      row.appendChild(metrics);
      row.appendChild(icons);

      propertiesTable.appendChild(row);
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
