import api from "./api";

const services = {
  getAllItems: (idBoard) => {
    return api.GET_allItems(idBoard);
  },
  createNewItem: (idBoard, item) => {
    return api.POST_addItem(idBoard, item);
  },
  changeItem: (idBoard, item) => {
    return api.POST_changeItem(idBoard, item);
  },
  removeItem: (idBoard, id) => {
    return api.POST_removeItem(idBoard, id);
  },
  dragDropItem: (idBoard, id, newTag) => {
    return api.POST_dragDropItem(idBoard, id, newTag);
  },
};

export default services;
