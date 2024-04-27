import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Wien" invert={invert}>
          Löwengasse 28 / Lokal 2A
          <br />
          1030, Wien, Österreich
        </Office>
      </li>
      <li>
        <Office name="Öffnungszeiten" invert={invert}>
          Montag – Freitag
          <br />
          09:00 – 18:00
        </Office>
      </li>
    </ul>
  );
}
