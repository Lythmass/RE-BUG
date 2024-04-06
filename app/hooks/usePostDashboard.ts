'use client';
import {
  useParams,
  usePathname,
  useSearchParams,
  useRouter,
} from 'next/navigation';

export const usePostDashboard = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  return { searchParams, params, router, pathname };
};
