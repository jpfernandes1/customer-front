import Image from 'next/image';

export default function Home() {
  return (
<>
    <h1 className="text-3xl font-bold text-accent mt-1">Dashboard 🚀</h1>

<div className='flex flex-row justify-between mt-8 gap-5 items-center'>
  <div className="h-6 flex items-left justify-center p-8 bg-surface rounded-2xl shadow-md w-full flex-col">
    <p className="font-bold">Total de clientes</p>
    <p>somatório</p>
  </div>
  <div className="h-6 flex items-left justify-center p-8 bg-surface rounded-2xl shadow-md w-full flex-col">
    <p className="font-bold">Novos Clientes</p>
    <p>somatório</p>
  </div>
  <div className="h-6 flex items-left justify-center p-8 bg-surface rounded-2xl shadow-md w-full flex-col">
    <p className="font-bold">Idade média</p>
    <p>média</p>
  </div>
</div>

      <button className="mt-4 px-4 py-2 bg-danger text-white rounded-md hover:opacity-90">
        Botão Danger
      </button>
</>
  );
}

