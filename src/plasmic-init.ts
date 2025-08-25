import { initPlasmicLoader } from '@plasmicapp/loader-nextjs/react-server-conditional';
import * as NextNavigation from 'next/navigation';

export const PLASMIC = initPlasmicLoader({
  nextNavigation: NextNavigation,
  projects: [
    {
      id: "6wgXRmFVoEBe3b4mcFGm99",  // ID of a project you are using
      token: "qHbxiroZwl6s2N9AleWegmmZKA4HgknkJ8Gy6hpxmRpHO2FJZB7dEpN2R0N7vf2uDss9yYtz675MRnA4cvlg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});
