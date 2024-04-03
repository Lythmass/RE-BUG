import { createProjectAction, revalidateData } from 'actions';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const projectException = async (
  formData: FormData,
  methods: any,
  router: AppRouterInstance,
) => {
  try {
    const response: any = await createProjectAction(formData);
    if (response.status == 200) {
      revalidateData('/projects/get');
      router.push(`/dashboard/${response.data.id}`);
    }
  } catch (error: any) {
    methods.setError('project', {
      message: error?.response.data.message,
    });
  }
};
