//mock data for doctors
export type Doctor = {
  id: string;
  name: string;
  languages: string[];
  postalPrefix: string;
  acceptingNewPatients: boolean;
};

export const doctors: Doctor[] = [
  {
    id: "doc1",
    name: "Dr. Emma Zhou",
    languages: ["English", "Spanish"],
    postalPrefix: "L5",
    acceptingNewPatients: false,
  },
  {
    id: "doc2",
    name: "Dr. Li Farah",
    languages: ["Arabic", "French"],
    postalPrefix: "M2",
    acceptingNewPatients: false,
  },
  {
    id: "doc3",
    name: "Dr. Sofia Rodriguez",
    languages: ["Chinese", "English"],
    postalPrefix: "K1",
    acceptingNewPatients: true,
  },
  {
    id: "doc4",
    name: "Dr. Emma Zhou",
    languages: ["English", "Arabic"],
    postalPrefix: "K1",
    acceptingNewPatients: true,
  },
  {
    id: "doc5",
    name: "Dr. Sofia Ibrahim",
    languages: ["English", "Arabic"],
    postalPrefix: "V6",
    acceptingNewPatients: false,
  },
  {
    id: "doc6",
    name: "Dr. Emily Hassan",
    languages: ["English"],
    postalPrefix: "K1",
    acceptingNewPatients: true,
  },
  {
    id: "doc7",
    name: "Dr. Amina Lopez",
    languages: ["French", "English"],
    postalPrefix: "L6",
    acceptingNewPatients: true,
  },
  {
    id: "doc8",
    name: "Dr. David Farah",
    languages: ["Spanish", "English"],
    postalPrefix: "L6",
    acceptingNewPatients: false,
  },
  {
    id: "doc9",
    name: "Dr. Sofia Chen",
    languages: ["Spanish", "English"],
    postalPrefix: "M3",
    acceptingNewPatients: false,
  },
  {
    id: "doc10",
    name: "Dr. Nadia Nguyen",
    languages: ["English", "Arabic"],
    postalPrefix: "L5",
    acceptingNewPatients: false,
  },
  {
    id: "doc11",
    name: "Dr. Yara Farah",
    languages: ["Spanish", "English"],
    postalPrefix: "T2",
    acceptingNewPatients: false,
  },
  {
    id: "doc12",
    name: "Dr. Sofia Chen",
    languages: ["Spanish", "English"],
    postalPrefix: "L5",
    acceptingNewPatients: true,
  },
  {
    id: "doc13",
    name: "Dr. Sofia Khan",
    languages: ["English", "Spanish"],
    postalPrefix: "R3",
    acceptingNewPatients: true,
  },
  {
    id: "doc14",
    name: "Dr. Zhang Nguyen",
    languages: ["English"],
    postalPrefix: "L6",
    acceptingNewPatients: true,
  },
  {
    id: "doc15",
    name: "Dr. Emma Smith",
    languages: ["Chinese", "English"],
    postalPrefix: "M1",
    acceptingNewPatients: true,
  },
  {
    id: "doc16",
    name: "Dr. Tariq Smith",
    languages: ["Chinese", "English"],
    postalPrefix: "M1",
    acceptingNewPatients: false,
  },
  {
    id: "doc17",
    name: "Dr. Laura Fernández",
    languages: ["English", "Arabic"],
    postalPrefix: "R3",
    acceptingNewPatients: true,
  },
  {
    id: "doc18",
    name: "Dr. Zhang Huang",
    languages: ["English"],
    postalPrefix: "T2",
    acceptingNewPatients: true,
  },
  {
    id: "doc19",
    name: "Dr. Laura Khan",
    languages: ["English", "Chinese"],
    postalPrefix: "K1",
    acceptingNewPatients: false,
  },
  {
    id: "doc20",
    name: "Dr. Amina Smith",
    languages: ["English", "Arabic"],
    postalPrefix: "M4",
    acceptingNewPatients: false,
  },
];
