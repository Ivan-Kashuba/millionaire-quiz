import { Context, useContext } from 'react';

export function useContextWithCheck<T>(ClassContext: Context<T | undefined>): T {
    const context = useContext(ClassContext);
    if (!context) {
        throw new Error('useContext must be used within the <ContextProvider>');
    }
    return context;
}
