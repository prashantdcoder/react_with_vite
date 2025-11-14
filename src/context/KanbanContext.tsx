import { createContext } from "react";
import { KanbanContextProp } from "../utils/types";


export const KanbanContext = createContext<KanbanContextProp>(null);

const KanbanProvider = ({ children, title }: KanbanContextProp) => {
    return (
        <KanbanContext.Provider value={{ title }}>
            {children}
        </KanbanContext.Provider>
    );
};

export default KanbanProvider;