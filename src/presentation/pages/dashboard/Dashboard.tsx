import { useState, useEffect } from "react";
import { InputSearchSelector } from "@/presentation/components/InputSearchSelector";
import comercialTypes from "@/resources/repositories/json/comercialTypes.json";

export const Dashboard = () => {

  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );
  
  const [toogle, setToogle] = useState(false);

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
      (option: any) => option.label === label
    );

    setSelectedType(selectedOption ? selectedOption.label : undefined);
  };

  return (
    <main>
      <InputSearchSelector
        name="type"
        options={formattedData || []}
        onChange={() => setToogle(!toogle)}
        className="fluid-container flex-col px-def-border py-5 justify-center justify-items-center text-black text-center w-3/4 md:w-2/3 text-2xl"
      />

      {/* {selectedType && <h2>{selectedType}</h2>} */}
      {!toogle && (
        <div className="bg-zinc-900">
        <div className="container mx-auto px-def-border py-5 justify-center justify-items-center w-full">
          <img src="../../../../public/info_bars.jpg" alt="Info Bars" className="my-5 justify-center justify-items-center w-full"/>
          <img src="../../../../public/bcn_map.jpg" alt="Map" className="my-5 justify-center justify-items-center w-full"/>
        </div>
        </div>
      )
      }
    </main>
  );
};
