import React, { useEffect, useState } from "react";
import { Checkbox } from "../../ui/checkbox";

interface CheckBoxNodeProps {
  id: number;
  label: string;
  checked: boolean;
  onChangeHandler: (id: number, checked: boolean) => void;
}

const CheckBoxNode: React.FC<CheckBoxNodeProps> = ({
  label,
  checked,
  onChangeHandler,
  id,
}) => {

  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = (checkedState: boolean) => {
    setIsChecked(checkedState);
    onChangeHandler(id, checkedState);
  };

  return (
    <label className="flex items-center gap-2">
      <Checkbox
        data-testid={`checkbox-${id}`}
        value={label}
        checked={isChecked}
        onCheckedChange={handleChange}
      />
      {label}
    </label>
  );
};

export default CheckBoxNode;
