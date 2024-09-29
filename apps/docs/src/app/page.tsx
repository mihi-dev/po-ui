import { css } from '@styled-system/css';

export default function Page() {
  return (
    <div className={css({ paddingTop: 8 })}>
      <h1
        className={css({
          textAlign: 'center',
          fontSize: 48,
          fontWeight: 'bold',
        })}
      >
        "Kungfu secret" for Web developers
      </h1>
      <p
        className={css({
          fontSize: 18,
          textAlign: 'center',
        })}
      >
        A collection of components styled with <b>PandaCSS</b> that lets you
        turn designs into applications with just <b>"copy & paste"</b>.
      </p>
    </div>
  );
}
