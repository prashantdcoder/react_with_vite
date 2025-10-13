import React, { useCallback, useEffect, useState } from "react";
import NestedCheckBoxPreview from "../NestedCheckBoxPreview/NestedCheckBoxPreview";
import { ICheckBoxNode } from "../../utils/types";

const CheckboxTree = ({ initialData }: { initialData: ICheckBoxNode[] }) => {
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

  const MemoisedCheckboxPreview = useCallback((preview: { data: ICheckBoxNode[], changeHandler: (id: number, checked: boolean) => void }) => {
    const { data, changeHandler } = preview;
    return <NestedCheckBoxPreview checkboxData={data} onChangeHandler={changeHandler} />
  }, [checkboxData]);

  return (
    <div>
      {/* <MemoisedCheckboxPreview data={checkboxData} changeHandler={onChangeHandler} /> */}
      <NestedCheckBoxPreview checkboxData={checkboxData} onChangeHandler={onChangeHandler} />
    </div>
  );
};

export default CheckboxTree;
