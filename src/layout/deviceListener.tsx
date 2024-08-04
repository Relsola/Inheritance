import { useEffect } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { changeDevice } from '@/features/config';

const DeviceListener: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      const device = window.innerWidth < 600 ? 'mobile' : 'desktop';
      dispatch(changeDevice(device));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return null;
};

export default DeviceListener;
