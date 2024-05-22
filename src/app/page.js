export default function Home() {
  return (
    <>
      <h1 className="text-center font- text-4xl text-white bg-black">Bem vindo</h1>
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="flex flex-row space-x-10">
          <div
            className="flex p-4 items-center justify-center h-96 w-80 rounded-md"
            style={{
              backgroundImage: `url('https://images7.alphacoders.com/120/thumb-1920-1203276.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h1 className="text-white font-extrabold text-5xl transition-all duration-300 hover:text-6xl hover:text-black">
              SKINS
            </h1>
          </div>
          <div
            className="flex items-center justify-center p-4 h-96 w-80 rounded-md"
            style={{
              backgroundImage: `url('https://images7.alphacoders.com/132/thumb-1920-1328104.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <span className="text-white font-extrabold text-5xl transition-all duration-300 hover:text-6xl hover:text-black">
              TROCA
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
