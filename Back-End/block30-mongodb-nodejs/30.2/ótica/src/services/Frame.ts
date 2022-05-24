import Service, { ServiceError } from ".";
import Frame, { FrameSchema } from "../interfaces/Frame";
import FrameModel from "../models/Frame";

export default class FrameService extends Service<Frame> {
  constructor(model = new FrameModel()) {
    super(model);
  }

  async create(obj: Frame): Promise<Frame | null | ServiceError> {
    const parserd = FrameSchema.safeParse(obj);

    if (!parserd.success) {
      return { error: parserd.error };
    }

    return this.model.create(obj);
  }
}