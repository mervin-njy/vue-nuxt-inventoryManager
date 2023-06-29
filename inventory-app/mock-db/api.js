// Mock Data ------------------------------------------------------------------------
const mockApartments = [
  {
    id: 1,
    address: "1 Raffles Place",
    floor: "15",
    doorNumber: "01",
    imageUrl: "/apartmentImages/01.jpg",
    area: 495,
    status: "Available",
  },
  {
    id: 2,
    address: "25 Marina Boulevard",
    floor: "28",
    doorNumber: "02",
    imageUrl: "/apartmentImages/02.jpg",
    area: 830,
    status: "Occupied",
  },
  {
    id: 3,
    address: "8 Sentosa Gateway",
    floor: "07",
    doorNumber: "09",
    imageUrl: "/apartmentImages/03.jpg",
    area: 943,
    status: "Pending",
  },
  {
    id: 4,
    address: "14 Scotts Road",
    floor: "12",
    doorNumber: "03",
    imageUrl: "/apartmentImages/04.jpg",
    area: 680,
    status: "Pending",
  },
  {
    id: 5,
    address: "6 Shenton Way",
    floor: "20",
    doorNumber: "05",
    imageUrl: "/apartmentImages/05.jpg",
    area: 790,
    status: "Occupied",
  },
  {
    id: 6,
    address: "15 Queen St",
    floor: "10",
    doorNumber: "07",
    imageUrl: "/apartmentImages/06.jpg",
    area: 928,
    status: "Available",
  },
  {
    id: 7,
    address: "11 Orchard Turn",
    floor: "18",
    doorNumber: "06",
    imageUrl: "/apartmentImages/07.jpg",
    area: 1028,
    status: "Occupied",
  },
  {
    id: 8,
    address: "4 Battery Road",
    floor: "09",
    doorNumber: "04",
    imageUrl: "/apartmentImages/08.jpg",
    area: 525,
    status: "Occupied",
  },
  {
    id: 9,
    address: "3 Beach Road",
    floor: "01",
    doorNumber: "03",
    imageUrl: "/apartmentImages/09.jpg",
    area: 1044,
    status: "Pending",
  },
  {
    id: 10,
    address: "16 Collyer Quay",
    floor: "12",
    doorNumber: "08",
    imageUrl: "/apartmentImages/10.jpg",
    area: 729,
    status: "Available",
  },
  {
    id: 11,
    address: "18 Collyer Quay",
    floor: "08",
    doorNumber: "09",
    imageUrl: "/apartmentImages/11.jpg",
    area: 729,
    status: "Pending",
  },
  {
    id: 12,
    address: "10 Anson Road",
    floor: "16",
    doorNumber: "04",
    imageUrl: "/apartmentImages/12.jpg",
    area: 688,
    status: "Occupied",
  },
];

const mockInventory = [];

// Simulate API response delay -------------------------------------------------------
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Mock API functions ----------------------------------------------------------------
async function getApartments() {
  await delay(500); // Simulate API delay
  return mockApartments;
}

async function getInventory(apartmentId) {
  await delay(500); // Simulate API delay
  return mockInventory;
}

async function createInventory(apartmentId) {
  await delay(500); // Simulate API delay
  // code to create
  return mockInventory;
}

async function updateInventory(apartmentId) {
  await delay(500); // Simulate API delay
  // code to update
  return mockInventory;
}

async function deleteInventory(apartmentId) {
  await delay(500); // Simulate API delay
  // code to delete
  return mockInventory;
}

// Export API functions --------------------------------------------------------------
export {
  getApartments,
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
};
