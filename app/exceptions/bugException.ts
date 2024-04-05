import { createBugAction, revalidateData } from 'actions';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const bugException = async (
  formData: FormData,
  methods: any,
  router: AppRouterInstance,
  project_id: string | string[],
) => {
  try {
    const response: any = await createBugAction(formData);
    if (response.status == 200) {
      revalidateData(`/bugs/get/${project_id}`);
      router.push(`/dashboard/${project_id}`);
    }
  } catch (error: any) {
    methods.setError('name', {
      message: error?.response.data.message,
    });
  }
};
