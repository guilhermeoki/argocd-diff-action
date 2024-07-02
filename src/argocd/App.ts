import { Source } from './Source';

export interface App {
  metadata: { name: string };
  spec: {
    source?: Source;
    sources: Source[];
  };
  status: {
    sync: {
      status: 'OutOfSync' | 'Synced';
    };
  };
}
