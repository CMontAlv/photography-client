import * as React from 'react';

type FuncType<T> = (initialState: T) => [T, (event: React.ChangeEvent<HTMLInputElement>) => T];

export const useFormFields: FuncType<any> = (initialState) => {
    const [fields, setValues] = React.useState(initialState);

    return [
        fields,
        function ({ target: { id, value } }) {
            setValues({
                ...fields,
                ...(id && typeof value === 'string' ? { [id]: value } : {}),
            });
        },
    ];
};
