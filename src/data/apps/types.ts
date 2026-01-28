export interface AppData {
  id: string;
  appleId?: string;
  googleId?: string;
  logo: string;
  name: string;
  subtitle?: string;
  description: string;
  forChild: boolean;
  withAdmob: boolean;
  withAnalytics: boolean;
  withCrashlytics: boolean;
  comingSoon?: boolean;
  translations?: {
    [key: string]: {
      name?: string;
      subtitle?: string;
      description?: string;
    };
  };
}
