import Service, { ServiceError } from '.';
import RecordStore, { RecordStoreSchema } from '../interface/RecordStore';
import RecordStoreModel from '../model/RecordStore';

export default class RecordStoreService extends Service<RecordStore> {
  constructor(model = new RecordStoreModel()) {
    super(model);
   }

   async create(obj: RecordStore): Promise<RecordStore | null | ServiceError> {
     const parserd = RecordStoreSchema.safeParse(obj);

     if (!parserd.success) {
       return { error: parserd.error };
     }

     return this.model.create(obj);
   }
}