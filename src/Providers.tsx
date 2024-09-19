import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Asumiendo que tu AuthContext está en src/AuthContext.tsx
import { SnackbarProvider } from './context/SnackbarContext'; // Asegúrate de importar SnackbarProvider
import { LanguageProvider } from './context/LanguageContext'; // Asegúrate de importar LanguageProvider

const queryClient = new QueryClient();

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <AuthProvider>
                    <LanguageProvider> {/* Envolvemos con LanguageProvider */}
                        <SnackbarProvider> {/* Envolvemos con SnackbarProvider */}
                            {children}
                        </SnackbarProvider>
                    </LanguageProvider>
                </AuthProvider>
            </Router>
        </QueryClientProvider>
    );
};

export default Providers;
