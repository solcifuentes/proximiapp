import { useState, useEffect } from "react";
import { InputSearchSelector } from "@/presentation/components/InputSearchSelector";
import comercialTypes from "@/resources/repositories/district/json/comercialTypes.json";

export const Dashboard = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  const formattedData = comercialTypes.map(
    ({ Nom_Barri, Nom_Grup_Activitat, counts }) => ({
      value: `${Nom_Grup_Activitat}`,
      barri: Nom_Barri,
      label: Nom_Grup_Activitat,
      counter: counts,
    })
  );

  const handleTypeChange = (label: string) => {
    const selectedOption = formattedData.find(
      (option) => option.label === label
    );

    setSelectedType(selectedOption ? selectedOption.label : undefined);
  };

  return (
    <main>
      <InputSearchSelector
        name="type"
        options={formattedData || []}
        onChange={handleTypeChange}
      />

      {selectedType && <h2>{selectedType}</h2>}
    </main>
  );
};
