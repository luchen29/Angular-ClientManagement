
export class ModelModel {
    id: string;
    uid: string;
    client: string;
    eyeglass: string;
    colorupc: string;
    modelName: string;
    thumbUrl: string;
    postUrl: string;
  
    constructor(model?) {
      if (model) {
        this.id = model._id;
        this.client = model.client;
        this.eyeglass = model.eyeglass;
        this.colorupc = model.colorupc;
        this.uid = model.uid;
        this.modelName = model.modelName;
        this.thumbUrl = model.thumbUrl;
        this.postUrl = model.postUrl;
      }
    }
  }
  