import logo from "../../assets/react.svg";

export const Aside = () => {
  return (
    <aside className="bg-neutral-header max-w-70.5 min-h-screen py-20 px-10 flex flex-col gap-14">
      <img src={logo} />

      <p className="text-neutral-text text-[13px] leading-[120%] text-center">
        Desenvolvido por Alura. Projeto fictício sem fins lucrativos.
      </p>
    </aside>
  );
};
