// Note(10) :: // we will use this shred service file in a big projects to share the same methods will be used in many components
import httpRequest from "../baseURL";

const componentName = ''

const getAll = () => {
  return httpRequest.get(`/${componentName}`);
};

const get = id => {
  return httpRequest.get(`/${componentName}/${id}`);
};

const create = data => {
  return httpRequest.post(`/${componentName}`, data);
};

const update = (id, data) => {
  return httpRequest.put(`/${componentName}/${id}`, data);
};

const remove = id => {
  return httpRequest.delete(`/${componentName}/${id}`);
};

const removeAll = () => {
  return httpRequest.delete(`/${componentName}`);
};

const findByTitle = title => {
  return httpRequest.get(`/${componentName}?title=${title}`);
};

const SharedService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default SharedService;
