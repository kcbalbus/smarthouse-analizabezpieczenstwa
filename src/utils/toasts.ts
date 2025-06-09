import { Slide, toast, ToastOptions } from "react-toastify";

const commonToastOptions: ToastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    pauseOnHover: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide,
};

export const successToast = (message: string): void => {
    toast.success(message, {
        ...commonToastOptions,
    });
};

export const warningToast = (message: string): void => {
    toast.warning(message, {
        ...commonToastOptions,
    });
};

export const errorToast = (message: string): void => {
    toast.error(message, {
        ...commonToastOptions,
    });
};
