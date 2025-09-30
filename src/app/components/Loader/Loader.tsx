
import { PacmanLoader } from 'react-spinners';


import css from './Loader.module.css';

export interface Props {

  loading: boolean;
}

const Loader = ({loading}: Props) => {
  return (
    <div className={`${css.loaderBackdrop} ${loading ? css.active : ""}`}>
     
      <PacmanLoader   
      color="var(--orange)"
        loading={loading}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1} />
    </div>
  );
};

export default Loader;
