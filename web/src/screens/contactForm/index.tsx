import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import CellphoneMask from "../../utils/CellPhoneMask";

type IClientData = {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  text: string;
};

export function ContactForm() {
  const [filds, setFilds] = useState<IClientData>({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    text: "",
  });

  async function handleSendForm(event: FormEvent) {
    event.preventDefault();

    console.log(filds);

    return await api.post("/sendMessage", filds);
  }

  return (
    <form
      action="post"
      className="w-full bg-[#292c2e] p-10 flex flex-col items-center gap-10"
    >
      <div className="w-2/4 flex justify-between bkdefault:flex-col bkdefault:gap-10">
        <div className="w-[45%] flex flex-col gap-3 bkdefault:w-full">
          <label className="text-stone-100">Nome:</label>
          <input
            className="bg-transparent text-stone-100 focus:outline-none border-solid border p-2 rounded-xl border-[#fff]"
            type="text"
            name="clientName"
            onChange={(e) => {
              setFilds({
                ...filds,
                clientName: e.target.value,
              });
            }}
          />
        </div>

        <div className="w-[45%] flex flex-col gap-3 bkdefault:w-full">
          <label className="text-stone-100">Telefone de contato:</label>
          <input
            className="bg-transparent text-stone-100 focus:outline-none border p-2 rounded-xl border-solid border-[#fff]"
            type="text"
            name="clientPhone"
            value={filds.clientPhone}
            onChange={(e) => {
              setFilds({
                ...filds,
                clientPhone: `${CellphoneMask(e.target.value)}`,
              });
            }}
          />
        </div>
      </div>

      <div className="w-2/4 flex flex-col gap-3">
        <label className="text-stone-100">Email:</label>
        <input
          className="bg-transparent text-stone-100 focus:outline-none border p-2 rounded-xl border-solid border-[#fff]"
          type="email"
          name="clientEmail"
          onChange={(e) => {
            setFilds({
              ...filds,
              clientEmail: e.target.value,
            });
          }}
        />
      </div>

      <div className="w-2/4 flex flex-col gap-3">
        <label className="text-stone-100">Mensagem:</label>
        <textarea
          className="h-[150px] bg-transparent text-stone-100 focus:outline-none resize-none border p-2 rounded-xl border-solid border-[#fff]"
          onChange={(e) => {
            setFilds({
              ...filds,
              text: e.target.value,
            });
          }}
          name="text"
        />
      </div>

      <input
        className="w-2/4 bg-transparent text-stone-100 cursor-pointer border p-4 rounded-xl border-solid border-[#fff] transition hover:border-orange-600 hover:bg-[#fff] hover:text-orange-600 duration-100"
        type="submit"
        value="Enviar Mensagem"
        onClick={(e) => handleSendForm(e)}
      />
    </form>
  );
}
