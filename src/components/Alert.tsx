import { ReactNode } from "react";

interface ListGroupProps {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: ListGroupProps) => {
  return (
    <div className='alert alert-danger alert-dismissable'>
      {children}
      <button
        type='button'
        className='btn-close'
        onClick={onClose}
        data-bs-dismiss='alert'
        aria-label='Close'
      ></button>
    </div>
  );
};
export default Alert;
