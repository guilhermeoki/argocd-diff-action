export interface Source {
  repoURL: string;
  path?: string;
  targetRevision: string;
  kustomize?: Object;
  helm?: Object;
}
