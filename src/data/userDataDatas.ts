export const userDataDatas = {
  departments: [
    {
      departmentId: "D001",
      name: "Human Resources",
      description: "Handles employee relations and administration.",
      createdAt: "2025-01-10",
      updatedAt: "2025-06-15",
    },
    {
      departmentId: "D002",
      name: "Engineering",
      description: "Responsible for software and product development.",
      createdAt: "2025-02-05",
      updatedAt: "2025-08-20",
    },
  ],

  employees: [
    {
      employeeId: "EMP001",
      name: "John Doe",
      password: "hashed_password_123",
      departmentId: "D001", // links to HR
      phone: "+233501234567",
      photo: "johndoe.jpg",
      address: "Accra, Ghana",
      createdDate: "2025-09-01",
    },
    {
      employeeId: "EMP002",
      name: "Jane Smith",
      password: "hashed_password_456",
      departmentId: "D002", // links to Engineering
      phone: "+233509876543",
      photo: "janesmith.jpg",
      address: "Kumasi, Ghana",
      createdDate: "2025-09-03",
    },
    {
      employeeId: "EMP003",
      name: "Kwame Boateng",
      password: "hashed_password_789",
      departmentId: "D002", // also Engineering
      phone: "+233541112233",
      photo: "kwameboateng.jpg",
      address: "Takoradi, Ghana",
      createdDate: "2025-09-05",
    },
  ],

  attendances: [
    {
      employeeId: "EMP001", // John Doe from HR
      checkIn: "2025-09-19T08:30:00",
      checkOut: "2025-09-19T17:00:00",
      status: "Present",
      notes: "On time",
      createdAt: "2025-09-19T08:31:00",
      updatedAt: "2025-09-19T17:01:00",
    },
    {
      employeeId: "EMP002", // Jane Smith from Engineering
      checkIn: "2025-09-19T09:15:00",
      checkOut: "2025-09-19T16:45:00",
      status: "Late",
      notes: "Traffic delay",
      createdAt: "2025-09-19T09:16:00",
      updatedAt: "2025-09-19T16:46:00",
    },
    {
      employeeId: "EMP003", // Kwame Boateng from Engineering
      checkIn: "2025-09-19T08:45:00",
      checkOut: "2025-09-19T17:10:00",
      status: "Present",
      notes: "Stayed extra 10 mins",
      createdAt: "2025-09-19T08:46:00",
      updatedAt: "2025-09-19T17:11:00",
    },
  ],
};
