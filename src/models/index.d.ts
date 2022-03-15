import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MenuItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MenuItem {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly category: string;
  readonly price?: number;
  readonly calories?: number;
  readonly customer_rating?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MenuItem, MenuItemMetaData>);
  static copyOf(source: MenuItem, mutator: (draft: MutableModel<MenuItem, MenuItemMetaData>) => MutableModel<MenuItem, MenuItemMetaData> | void): MenuItem;
}