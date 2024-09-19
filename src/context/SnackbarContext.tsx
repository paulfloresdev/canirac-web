import React, { createContext, useState, ReactNode, useContext, FC } from 'react';

// Define el tipo para el contexto
interface SnackbarContextType {
    showSnackbar: (message: string, type: 'success' | 'error') => void;
}

// Crea el contexto con un valor predeterminado de undefined
const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

// Define el proveedor de contexto
export const SnackbarProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [snackbar, setSnackbar] = useState<{ message: string; type: 'success' | 'error'; visible: boolean }>({
        message: '',
        type: 'success',
        visible: false,
    });

    const showSnackbar = (message: string, type: 'success' | 'error') => {
        setSnackbar({ message, type, visible: true });
        setTimeout(() => setSnackbar(prev => ({ ...prev, visible: false })), 3000);
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            {snackbar.visible && (
                <div className={`snackbar ${snackbar.type}`}>
                    {snackbar.message}
                </div>
            )}
        </SnackbarContext.Provider>
    );
};

// Hook para usar el contexto
export const useSnackbar = () => {
    const context = useContext(SnackbarContext);
    if (context === undefined) {
        throw new Error('useSnackbar must be used within a SnackbarProvider');
    }
    return context;
};
