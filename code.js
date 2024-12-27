document.addEventListener("DOMContentLoaded", () => {
  // Populate Properties Table
  const propertiesTable = document.getElementById("propertiesTable");
  properties.propertyGroup.properties.forEach((property) => {
    const row = document.createElement("div");
    row.className = "property-row";

    const image = document.createElement("img");
    image.src = property.imageUrl || "https://via.placeholder.com/120x100";
    image.alt = property.name;
    image.className = "property-image";

    const details = document.createElement("div");
    details.className = "property-details";
    details.innerHTML = `
      <p class="property-name">${property.name}</p>
      <p class="property-address">${property.address}</p>
      <p>${property.type}</p>
    `;

    const icons = document.createElement("div");
    icons.className = "property-icons";
    icons.innerHTML = `
      <span class="property-icon">
        <img src="https://via.placeholder.com/20" alt="Bedrooms"> ${property.bedrooms || "N/A"}
      </span>
      <span class="property-icon">
        <img src="https://via.placeholder.com/20" alt="Beds"> ${property.beds || "N/A"}
      </span>
    `;

    row.appendChild(image);
    row.appendChild(details);
    row.appendChild(icons);

    propertiesTable.appendChild(row);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Ensure properties.js is loaded
  if (!properties || !properties.propertyGroup) {
    console.error("Properties data is not available!");
    return;
  }

  // Render Charts
  const revenueChart = new Chart(document.getElementById("revenueChart"), {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Revenue",
          data: [2500, 3000, 2800, 3200, 4000], // Example data
          backgroundColor: "#4caf50",
        },
      ],
    },
  });

  const costChart = new Chart(document.getElementById("costChart"), {
    type: "pie",
    data: {
      labels: ["Cleaning", "Electricity", "Maintenance", "Other"],
      datasets: [
        {
          data: [500, 800, 600, 300], // Example data
          backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#f44336"],
        },
      ],
    },
  });

  const netIncomeChart = new Chart(document.getElementById("netIncomeChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Net Income",
          data: [1500, 1800, 2100, 2500, 3000], // Example data
          borderColor: "#2196f3",
          fill: false,
        },
      ],
    },
  });

  const occupancyChart = new Chart(document.getElementById("occupancyChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Occupancy",
          data: [80, 85, 90, 88, 87], // Example data
          borderColor: "#ff9800",
          fill: false,
        },
      ],
    },
  });
});
