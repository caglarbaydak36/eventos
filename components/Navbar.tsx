export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">

        <div className="text-right">
          <p className="font-semibold">
            Çağlar Baydal
          </p>

          <p className="text-sm text-gray-500">
            Yönetici
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
          Ç
        </div>

      </div>
    </header>
  );
}