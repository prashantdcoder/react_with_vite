import React from "react";
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
  const handleChange = (checkedState: boolean) => {
    onChangeHandler(id, checkedState);
  };

  return (
    <label className="flex items-center gap-2">
      <Checkbox
        data-testid={`checkbox-${id}`}
        value={label}
        checked={checked}
        onCheckedChange={handleChange}
      />
      {label}
    </label>
  );
};

export default CheckBoxNode;
