
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  LayoutDashboard, 
  Users, 
  CheckSquare, 
  XSquare, 
  Clock, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { toast } from 'sonner';

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const handleLogout = () => {
    // Clear admin session
    localStorage.removeItem('adminLoggedIn');
    toast.success('Logout berhasil');
    navigate('/admin/login');
  };

  return (
    <div className="bg-school-primary text-white min-h-screen w-64 flex flex-col">
      <div className="p-4">
        <h2 className="text-xl font-bold">SDIT Asy-Syafiiah</h2>
        <p className="text-sm opacity-75">Admin Panel</p>
      </div>
      
      <Separator className="bg-white/20" />
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link to="/admin/dashboard">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  isActive('/admin/dashboard')
                    ? 'bg-white/20 hover:bg-white/30'
                    : 'hover:bg-white/10'
                }`}
              >
                <LayoutDashboard className="mr-2 h-5 w-5" />
                Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/admin/registrations">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  isActive('/admin/registrations')
                    ? 'bg-white/20 hover:bg-white/30'
                    : 'hover:bg-white/10'
                }`}
              >
                <Users className="mr-2 h-5 w-5" />
                Semua Pendaftar
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/admin/approved">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  isActive('/admin/approved')
                    ? 'bg-white/20 hover:bg-white/30'
                    : 'hover:bg-white/10'
                }`}
              >
                <CheckSquare className="mr-2 h-5 w-5" />
                Diterima
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/admin/rejected">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  isActive('/admin/rejected')
                    ? 'bg-white/20 hover:bg-white/30'
                    : 'hover:bg-white/10'
                }`}
              >
                <XSquare className="mr-2 h-5 w-5" />
                Ditolak
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/admin/pending">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  isActive('/admin/pending')
                    ? 'bg-white/20 hover:bg-white/30'
                    : 'hover:bg-white/10'
                }`}
              >
                <Clock className="mr-2 h-5 w-5" />
                Menunggu
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/admin/settings">
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  isActive('/admin/settings')
                    ? 'bg-white/20 hover:bg-white/30'
                    : 'hover:bg-white/10'
                }`}
              >
                <Settings className="mr-2 h-5 w-5" />
                Pengaturan
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4">
        <Button
          variant="ghost"
          className="w-full justify-start hover:bg-white/10"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;
