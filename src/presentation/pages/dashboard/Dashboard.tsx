import { useState, useEffect } from "react";
import { InputSearchSelector } from "@/presentation/components/InputSearchSelector";
import comercialTypes from "@/resources/repositories/district/json/comercialTypes.json";
import sectorPerBarri from "@/resources/repositories/district/json/sectorPerBarri.json";

export const Dashboard = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  const formattedData = sectorPerBarri.map(({ Nom_Grup_Activitat }) => ({
    value: Nom_Grup_Activitat,
    label: Nom_Grup_Activitat,
  }));

  const handleTypeChange = (value: string) => {
    console.log({ value });
    const selectedOption = formattedData.find(
      (option) => option.label === value
    );

    setSelectedType(selectedOption ? selectedOption.label : undefined);
  };

  useEffect(() => {
    console.log({ selectedType });
  }, [selectedType]);

  return (
    <main>
      <InputSearchSelector
        name="type"
        options={formattedData || []}
        onChange={handleTypeChange}
      />
      {selectedType && <p>Chosen business: {selectedType}</p>}
    </main>
  );
};
