import { toast } from 'react-toastify';
export const BASE_URL = 'https://connections-api.herokuapp.com/';

export const updateToast = ({ id, type, text }) => {
  toast.update(id, {
    render: text,
    type: type,
    isLoading: false,
    autoClose: 4000,
  });
};
