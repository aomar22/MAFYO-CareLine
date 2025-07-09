//form: mock matching

import { useState } from "react";
import { doctors } from "../data/doctors";
import type { Doctor } from "../data/doctors";

export default function Match() {
  const [language, setLanguage] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [concern, setConcern] = useState("");
  const [matchedDoctors, setMatchedDoctors] = useState<Doctor[]>([]);

  const [matched, setMatched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const match = doctors.filter(
      (doc) =>
        doc.languages.includes(language) &&
        postalCode.toUpperCase().startsWith(doc.postalPrefix)
    );

    setMatchedDoctors(match || null);
    setMatched(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
          Find a Family Doctor
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* language */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">
              Preferred Language
            </label>
            <select
              required
              className="w-full border rounded px-4 py-2 text-black"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">-- Select Language --</option>
              <option>English</option>
              <option>Arabic</option>
              <option>Spanish</option>
              <option>Chinese</option>
            </select>
          </div>

          {/* postal code */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">
              Postal Code
            </label>
            <input
              required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="w-full border rounded px-4 py-2 text-black"
            />
          </div>

          {/* health concern */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">
              Health Concern
            </label>
            <input
              required
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              className="w-full border rounded px-4 py-2 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Match Me
          </button>
        </form>

        {/* match result */}
       {matched && (
  <div className="mt-8 space-y-4">
    {matchedDoctors.length > 0 ? (
      matchedDoctors.map((doc) => (
        <div
          key={doc.id}
          className="p-5 bg-green-50 border border-green-300 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-green-800">✅ Match Found!</h3>
          <p className="mt-1 text-gray-900">{doc.name}</p>
          <p className="text-gray-900">Languages: {doc.languages.join(" · ")}</p>
          <p className="text-gray-900">Location: Near {postalCode || "your area"}</p>
          <p className="mt-2 text-gray-900 font-medium">
            {doc.acceptingNewPatients
              ? "✅ Accepting New Patients"
              : "🚫 Not Accepting New Patients"}
          </p>
          <p className="mt-2 text-gray-700 italic">
            Primary concern noted: “{concern}”
          </p>
        </div>
      ))
    ) : (
      <div className="p-5 bg-red-50 border border-red-300 rounded-lg">
        <p className="text-red-600 font-medium">
          ❌ Sorry, no doctors found for your language and postal code.
        </p>
      </div>
    )}
  </div>
)}

      </div>
    </div>
  );
}
