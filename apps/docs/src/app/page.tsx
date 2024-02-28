import { css } from "@styled-system/css";

export default function Page() {
  return (
    <div className={css({ paddingTop: 8 })}>
      <h1
        className={css({
          textAlign: "center",
          fontSize: 48,
          fontWeight: "bold",
        })}
      >
        "Kungfu secret" for your component library
      </h1>
      <p
        className={css({
          fontSize: 18,
          textAlign: "center",
        })}
      >
        A collection of components built with <b>PandaCSS</b> and{" "}
        <b>React Aria</b> hooks that lets you turn designs into applications
        with the <b>"copy & paste" ultimate</b>.
      </p>
    </div>
  );
}
