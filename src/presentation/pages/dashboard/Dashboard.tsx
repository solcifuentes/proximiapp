import { useState } from "react";
import { InputSearchSelector } from "@/presentation/components/InputSearchSelector";
import comercialTypes from "@/resources/repositories/district/json/comercialTypes.json";
import Header from "@/presentation/components/Header";

export const Dashboard = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  const handleTypeChange = (value: string) => {
    const selectedOption = comercialTypes.find(
      (option) => option.value === Number(value)
    );
    setSelectedType(selectedOption ? selectedOption.label : undefined);
  };

  return (
    <main>
      <Header />
      <InputSearchSelector
        name="type"
        options={comercialTypes}
        onChange={handleTypeChange}
      />
      {selectedType && <p>Chosen business: {selectedType}</p>}
    </main>
  );
};
