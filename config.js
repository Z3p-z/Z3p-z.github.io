// -----------------------------
// Global Melo Maintenance Config
// -----------------------------

// Password for /maintenance-admin
const ADMIN_PASSWORD = "XYZ";

// Load maintenance state from localStorage
let MAINTENANCE_MODE = localStorage.getItem("maintenance") === "true";