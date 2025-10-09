import React, { useCallback, useState } from "react";
import NestedCheckBoxPreview from "../NestedCheckBoxPreview/NestedCheckBoxPreview";
import { ICheckBoxNode } from "../../utils/types";

const CheckboxTree = ({ initialData }: { initialData: ICheckBoxNode[] }) => {
  const [checkboxData, setCheckboxData] = useState(() => [...initialData]);

  const updateChildrenRecursively = (nodes: ICheckBoxNode[], ch: boolean): ICheckBoxNode[] => {
    return nodes.map((node) => {
      return {
        ...node,
        checked: ch,
        children: updateChildrenRecursively(node.children, ch),
      };
    });
  };

  const updateNodeRecursively = (nodes: ICheckBoxNode[], clickedNode: ICheckBoxNode, ch: boolean): ICheckBoxNode[] => {
    return nodes.map((node) => {
      if (node.id === clickedNode.id) {
        return {
          ...node,
          checked: ch,
          children: [...clickedNode.children],
        }
      }
      return {
        ...node,
        children: node.children && node.children.length > 0 ? updateNodeRecursively(node.children, clickedNode, ch) : [],
      };
    });
  }

  const findNodeRecursively = (nodes: ICheckBoxNode[], id: number, ch: boolean): ICheckBoxNode | undefined => {
    for (let node of nodes) {
      if (node.id === id) {
        return { ...node, checked: ch };
      } else if (node.children && node.children.length > 0) {
        const found = findNodeRecursively(node.children, id, ch);
        if (found) {
          return { ...found, checked: ch };
        }
      }
    }
    return undefined;
  }

  const onChangeHandler = (id: number, checked: boolean) => {
    const clickedCheckboxNode: ICheckBoxNode = findNodeRecursively(checkboxData, id, checked);
    clickedCheckboxNode.children = updateChildrenRecursively(clickedCheckboxNode.children, checked);
    const _updateData: ICheckBoxNode[] = updateNodeRecursively(checkboxData, clickedCheckboxNode, checked);
    setCheckboxData(_updateData);
  };

  const MemoisedCheckboxPreview = useCallback((preview: { data: ICheckBoxNode[], changeHandler: (id: number, checked: boolean) => void }) => {
    const { data, changeHandler } = preview;
    return <NestedCheckBoxPreview checkboxData={data} onChangeHandler={changeHandler} />
  }, [checkboxData]);

  return (
    <div>
      <MemoisedCheckboxPreview data={checkboxData} changeHandler={onChangeHandler} />
    </div>
  );
};

export default CheckboxTree;
