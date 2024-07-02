import { App } from './App';

export class AppCollection {
  apps: App[];

  constructor(apps: App[]) {
    this.apps = apps;
  }

  filterByExcludedPath(excludedPaths: string[]): AppCollection {
    if (excludedPaths.length === 0) {
      return this;
    }

    return new AppCollection(
      this.apps.filter(app => {
        return app.spec.sources !== undefined;
      })
    );
  }

  filterByRepo(repoMatch: string): AppCollection {
    return new AppCollection(
      this.apps.filter(app => {
        console.log(app);
        return (
          app.spec.sources !== undefined &&
          app.spec.sources.some(source => source.repoURL.includes(repoMatch))
        );
      })
    );
  }

  filterByTargetRevision(targetRevisions: string[] = ['master', 'main', 'HEAD']): AppCollection {
    return new AppCollection(
      this.apps.filter(app => {
        return (
          app.spec.sources !== undefined &&
          app.spec.sources.some(source => targetRevisions.includes(source.targetRevision))
        );
      })
    );
  }

  getAppByName(name: string): App | undefined {
    return this.apps.find(app => {
      return name === app.metadata.name;
    });
  }
}
