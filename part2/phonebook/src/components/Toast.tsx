import "../styles/toast-styles.css";

type ToastProps = {
  showToast: boolean;
  toastMessage: string;
};

const Toast = ({ showToast, toastMessage }: ToastProps) => {
  const isShow = showToast ? "show" : "";
  const isError = toastMessage.includes("Error") ? "error" : "success";
  return (
    <div id="toast" className={`${isShow} ${isError}`}>
      {toastMessage}
    </div>
  );
};

export default Toast;
