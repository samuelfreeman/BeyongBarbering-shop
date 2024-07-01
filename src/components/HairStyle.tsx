import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

interface Hairstyle {
  key: string;
  value: string;
  price: number;
}

interface HairStyleProps {
  setHairStyle: (value: string) => void;
  setAmount: (value: any) => void;
}

const HairStyle: React.FC<HairStyleProps> = ({ setHairStyle, setAmount }) => {
  const hairstyles: Hairstyle[] = [
    { key: "Haircut", value: "Hair Cut", price: 50 },
    { key: "Haircut-dye", value: "Hair cut & Dye", price: 70 },
    { key: "Dyeonly", value: "Dye Only", price: 30 },
    { key: "Kids", value: "Kids", price: 20 },
    { key: "KidsDye", value: "KidsDye", price: 40 }
  ];

  const [selectedKey, setSelectedKey] = React.useState<string>("Haircut");

  const handleChange = (key: React.Key) => {
    const selectedHairstyle = hairstyles.find(hs => hs.key === key);
    setSelectedKey(key as string);
    if (selectedHairstyle) {
      setHairStyle(selectedHairstyle.value); // Pass the hairstyle name
      setAmount(selectedHairstyle.price); // Pass the price
    }
  };



  const selectedValue = React.useMemo(
    () => hairstyles.find(hs => hs.key === selectedKey)?.value,
    [selectedKey]
  );

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="bordered"
            className="capitalize text-white bg-black rounded-md p-4"
          >
            {selectedValue}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          className="flex flex-col bg-white rounded-lg p-5"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={[selectedKey]}
          onSelectionChange={(keys) => handleChange([...keys][0])} // Access the first key from keys set
        >
          {hairstyles.map((hs) => (
            <DropdownItem key={hs.key}>{hs.value}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default HairStyle;
