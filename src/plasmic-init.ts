import { initPlasmicLoader } from '@plasmicapp/loader-nextjs/react-server-conditional';
import * as NextNavigation from 'next/navigation';

export const PLASMIC = initPlasmicLoader({
  nextNavigation: NextNavigation,
  projects: [
    {
      id: process.env.PLASMIC_PROJECT_ID!,
      token: process.env.PLASMIC_PUBLIC_TOKEN!,
    },
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: process.env.NODE_ENV === 'development',
});
