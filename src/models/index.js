// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MenuItem } = initSchema(schema);

export {
  MenuItem
};