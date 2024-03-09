import "../styles/toast-styles.css";

type ToastProps = {
  showToast: boolean;
  toastMessage: string;
};

const Toast = ({ showToast, toastMessage }: ToastProps) => {
  return (
    <div id="toast" className={showToast ? "show" : ""}>
      {toastMessage}
    </div>
  );
};

export default Toast;
