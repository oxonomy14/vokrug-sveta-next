
import css from './Caption.module.css';

export default function Caption({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={css.wrapHeadline}>
        <h1 className={css.headline}>{children}</h1>
      </div>
    </>
  );
}
