import { FidgetSpinner } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => (
  <div className={css.Loader}>
    <FidgetSpinner
      visible={true}
      height="80"
      width="80"
      ariaLabel="fidget-spinner-loading"
      wrapperStyle={{}}
      wrapperClass="fidget-spinner-wrapper"
    />
  </div>
);
