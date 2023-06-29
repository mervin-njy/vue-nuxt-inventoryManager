// Mock Data ------------------------------------------------------------------------
const mockApartments = [
  {
    id: 1,
    address: "1 Raffles Place",
    floor: 15,
    doorNumber: "05-01",
    imageUrl: "apartmentImages/01.jpg",
  },
  {
    id: 2,
    address: "25 Marina Boulevard",
    floor: 28,
    doorNumber: "10-02",
    imageUrl: "apartmentImages/02.jpg",
  },
  {
    id: 3,
    address: "8 Sentosa Gateway",
    floor: 7,
    doorNumber: "03-09",
    imageUrl: "apartmentImages/03.jpg",
  },
  {
    id: 4,
    address: "14 Scotts Road",
    floor: 12,
    doorNumber: "06-03",
    imageUrl: "apartmentImages/04.jpg",
  },
  {
    id: 5,
    address: "6 Shenton Way",
    floor: 20,
    doorNumber: "11-05",
    imageUrl: "apartmentImages/05.jpg",
  },
  {
    id: 6,
    address: "15 Queen St",
    floor: 10,
    doorNumber: "09-07",
    imageUrl: "apartmentImages/06.jpg",
  },
  {
    id: 7,
    address: "11 Orchard Turn",
    floor: 18,
    doorNumber: "08-06",
    imageUrl: "apartmentImages/07.jpg",
  },
  {
    id: 8,
    address: "4 Battery Road",
    floor: 9,
    doorNumber: "04-04",
    imageUrl: "apartmentImages/08.jpg",
  },
  {
    id: 9,
    address: "3 Beach Road",
    floor: 5,
    doorNumber: "02-03",
    imageUrl: "apartmentImages/09.jpg",
  },
  {
    id: 10,
    address: "16 Collyer Quay",
    floor: 32,
    doorNumber: "13-08",
    imageUrl: "apartmentImages/10.jpg",
  },
  {
    id: 11,
    address: "7 Raffles Avenue",
    floor: 22,
    doorNumber: "12-09",
    imageUrl: "apartmentImages/11.jpg",
  },
  {
    id: 12,
    address: "10 Anson Road",
    floor: 16,
    doorNumber: "07-04",
    imageUrl: "apartmentImages/12.jpg",
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
