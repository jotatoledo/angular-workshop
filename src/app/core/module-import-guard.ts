/**
 * Prevents re import of a module
 * Based on https://angular.io/guide/styleguide#prevent-re-import-of-the-core-module
 * @param parentModule the importer module
 * @param moduleName the imported module
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
