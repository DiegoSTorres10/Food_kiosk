import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <>
            <div className="md:flex">
                <AdminSidebar />

                <main className="flex-1 h-screen overflow-y-auto bg-gray-100 p-3">
                    <Outlet />
                </main>



            </div>
        </>
    )
}

export default AdminLayout