import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { USER_ROLE } from '@/constant/user.role.constant';

export const useAdminProtection = () => {
    const router = useRouter();
    const token = Cookies.get('token');
    const role = Cookies.get('role');
    const toastShownRef = useRef(false);

    useEffect(() => {
        if (!token || role !== USER_ROLE.ADMIN) {
            router.push('/login');
            if (!toastShownRef.current) {
                toast.info('Login as admin!');
                toastShownRef.current = true;
            }
        }
    }, [token, role, router]);
};
