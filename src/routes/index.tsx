import React from "react";
import { Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound'; // Componente 404
import { Loader } from "../components/widgets/Loader.tsx";

const Home = React.lazy(() => import("../views/public/Home.tsx"));

const LogIn = React.lazy(() => import("../views/dash/login/Login.tsx"));

const DashMemberships = React.lazy(() => import("../views/dash/memberships/DashMemberships.tsx"));
const EditMemberships = React.lazy(() => import("../views/dash/memberships/EditMemberships.tsx"));
const AddMemberships = React.lazy(() => import("../views/dash/memberships/AddMemberships.tsx"));

const DashContacts = React.lazy(() => import("../views/dash/contacts/DashContacts.tsx"));

const DashChamberMembers = React.lazy(() => import("../views/dash/chamber-members/DashChamberMembers.tsx"));
const EditChamberMembers = React.lazy(() => import("../views/dash/chamber-members/EditChamberMembers.tsx"));

const DashSocialMedias = React.lazy(() => import("../views/dash/social-media/DashSocialMedias.tsx"));
const EditSocialMedias = React.lazy(() => import("../views/dash/social-media/EditSocialMedias.tsx"));
const AddSocialMedias = React.lazy(() => import("../views/dash/social-media/AddSocialMedias.tsx"));

const DashEvents = React.lazy(() => import("../views/dash/events/DashEvents.tsx"));
const EditEvents = React.lazy(() => import("../views/dash/events/EditEvents.tsx"));
const AddEvents = React.lazy(() => import("../views/dash/events/AddEvents.tsx"));

const DashServices = React.lazy(() => import("../views/dash/services/DashServices.tsx"));
const EditServices = React.lazy(() => import("../views/dash/services/EditServices.tsx"));
const AddServices = React.lazy(() => import("../views/dash/services/EditServices.tsx"));

const AppRoutes = () => (
    <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
            path="/"
            element={
                <React.Suspense fallback={<Loader />}>
                    <Home />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/login"
            element={
                <React.Suspense fallback={<Loader />}>
                    <LogIn />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/membresias"
            element={
                <React.Suspense fallback={<Loader />}>
                    <DashMemberships />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/membresias/editar"
            element={
                <React.Suspense fallback={<Loader />}>
                    <EditMemberships />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/membresias/agregar"
            element={
                <React.Suspense fallback={<Loader />}>
                    <AddMemberships />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/contacto"
            element={
                <React.Suspense fallback={<Loader />}>
                    <DashContacts />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/camara"
            element={
                <React.Suspense fallback={<Loader />}>
                    <DashChamberMembers />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/camara/editar"
            element={
                <React.Suspense fallback={<Loader />}>
                    <EditChamberMembers />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/redes-sociales"
            element={
                <React.Suspense fallback={<Loader />}>
                    <DashSocialMedias />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/redes-sociales/editar"
            element={
                <React.Suspense fallback={<Loader />}>
                    <EditSocialMedias />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/redes-sociales/agregar"
            element={
                <React.Suspense fallback={<Loader />}>
                    <AddSocialMedias />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/eventos"
            element={
                <React.Suspense fallback={<Loader />}>
                    <DashEvents />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/eventos/editar"
            element={
                <React.Suspense fallback={<Loader />}>
                    <EditEvents />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/eventos/agregar"
            element={
                <React.Suspense fallback={<Loader />}>
                    <AddEvents />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/servicios"
            element={
                <React.Suspense fallback={<Loader />}>
                    <DashServices />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/servicios/editar"
            element={
                <React.Suspense fallback={<Loader />}>
                    <EditServices />
                </React.Suspense>
            }
        />
        <Route
            path="/admin/servicios/agregar"
            element={
                <React.Suspense fallback={<Loader />}>
                    <AddServices />
                </React.Suspense>
            }
        />

    </Routes>
);

export default AppRoutes;