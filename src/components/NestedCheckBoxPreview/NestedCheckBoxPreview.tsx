import React from "react";
import { ICheckBoxNode } from "../../utils/types";
import CheckBoxNode from "./CheckBoxNode/CheckBoxNode";

interface NestedCheckBoxPreviewProps {
    checkboxData: ICheckBoxNode[];
    onChangeHandler: (id: number, checked: boolean) => void;
}
const NestedCheckBoxPreview = ({ checkboxData, onChangeHandler }: NestedCheckBoxPreviewProps) => {

    return (
        <div data-testid="nested-checkbox-preview">
            {checkboxData.map((item) => {
                return (
                    <div data-testid={`nested-container-${item.id}`} key={item.id} className="mb-4 capitalize">
                        <CheckBoxNode {...item} onChangeHandler={onChangeHandler} />
                        <div className="ml-6 mt-2">
                            {item && item.children && item.children.length > 0 && (
                                <NestedCheckBoxPreview
                                    key={item.id}
                                    checkboxData={item.children}
                                    onChangeHandler={onChangeHandler}
                                />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default NestedCheckBoxPreview;
