import { revalidateData } from 'actions';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const dashboardException = async (
  errorField: string,
  scope: 'bugs' | 'projects' | 'bug',
  methods: any,
  action: (formData: FormData) => void,
  formData: FormData,
  router: AppRouterInstance,
  project_id: string | string[],
  bug_id?: string | string[],
) => {
  try {
    const response: any = await action(formData);
    if (response.status == 200) {
      if (scope == 'projects') {
        revalidateData('/projects/get');
        router.push(`/dashboard/${response.data.id}`);
      }
      if (scope == 'bugs') {
        revalidateData(`/bugs/get/${project_id}`);
        router.push(`/dashboard/${project_id}`);
      }
      if (scope == 'bug') {
        revalidateData(`/bugs/get/${project_id}`);
        router.push(`/dashboard/${project_id}/${bug_id}`);
        revalidateData(`/bugs/get/${project_id}/${bug_id}`);
      }
    }
  } catch (error: any) {
    methods.setError(errorField, {
      message: error?.response.data.message,
    });
  }
};
