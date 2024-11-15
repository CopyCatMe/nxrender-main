
export const dynamic = 'force-dynamic'
export default async function Page() {

  const num = Math.floor(Math.random() * 100)
  const hora = new Date().toLocaleTimeString()
  console.log(num, hora);

  return (
    <>
      <h2 className="text-xl font-bold text-center">Ejemplo 1: SSR Next</h2>
      <p className="text-8xl font-bold text-center">
        {num}
      </p>
      <p className="text-8xl font-bold text-center">
        {hora}
      </p>
    </>
  );
}
