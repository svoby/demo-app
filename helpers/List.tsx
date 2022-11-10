import { ReactNode } from 'react';

export default function List<T>({ items, render }: { items: T[]; render: (item: T) => ReactNode }) {
    return (
        <>
            {items.length === 0 ? (
                <p>List is empty</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{render(item)}</li>
                    ))}
                </ul>
            )}
        </>
    );
}
