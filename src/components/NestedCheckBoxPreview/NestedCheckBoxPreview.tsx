
import { ICheckBoxNode } from "../../utils/types";
import CheckBoxNode from "./CheckBoxNode/CheckBoxNode";

interface NestedCheckBoxPreviewProps {
    checkboxData: ICheckBoxNode[];
    onChangeHandler: (id: number, checked: boolean) => void;
}
const NestedCheckBoxPreview = ({ checkboxData, onChangeHandler }: NestedCheckBoxPreviewProps) => {

    return (
        <div>
            {checkboxData.map((item) => {
                return (
                    <div key={item.id} className="mb-4 capitalize">
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
