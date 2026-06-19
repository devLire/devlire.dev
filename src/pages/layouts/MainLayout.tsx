import { Outlet } from 'react-router';
import ScrollToHash from '@/components/ScrollToHash.tsx';
import { CustomFooter } from '@/components/CustomFooter.tsx';
import { CustomHeader } from '@/components/CustomHeader.tsx';

export const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <ScrollToHash />
      <CustomHeader />
      <Outlet />
      <CustomFooter />
    </div>
  );
};
