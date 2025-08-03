import React, {type JSX} from "react";

interface ListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
}

function List<T>({items, renderItem}: ListProps<T>): JSX.Element {
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>{renderItem(item, index)}</div>
            ))}
        </div>
    );
}

export default List;