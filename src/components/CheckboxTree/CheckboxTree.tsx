import React, { useState } from "react";
import { ICheckBoxNode } from "../../utils/types";
import NestedCheckBoxPreview from "../NestedCheckBoxPreview/NestedCheckBoxPreview";

interface CheckBoxNodeProps {
  initialData: ICheckBoxNode[]
}

const CheckboxTree: React.FC<CheckBoxNodeProps> = ({ initialData }) => {
  const [checkboxData, setCheckboxData] = useState(() => [...initialData]);

  const updateChildrenRecursively = (children: ICheckBoxNode[], checked: boolean): ICheckBoxNode[] => {
    return children.map((node: ICheckBoxNode) => {
      return {
        ...node,
        checked,
        children: node.children && node.children.length > 0 ? updateChildrenRecursively(node.children, checked) : [],
      };
    });
  };

  const updateNode = (nodes: ICheckBoxNode[], checked: boolean, id: number): ICheckBoxNode[] => {
    return nodes.map(node => {
      if (node.id === id) {
        return {
          ...node,
          checked,
          children: updateChildrenRecursively(node.children, checked),
        };
      }
      return updateNode(node.children, checked, id).length > 0 ? {
        ...node,
        children: updateNode(node.children, checked, id),
      } : node;
    });
  };

  const onChangeHandler = (id: number, checked: boolean) => {
    setCheckboxData((prev) => updateNode(prev, checked, id));
  };

  return (
    <div data-testid='checkbox-tree'>
      <NestedCheckBoxPreview checkboxData={checkboxData} onChangeHandler={onChangeHandler} />
    </div>
  );
};

export default CheckboxTree;
