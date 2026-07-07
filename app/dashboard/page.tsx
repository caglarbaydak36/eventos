import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <section className="flex-1">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold">
            Hoş Geldin Çağlar 👋
          </h1>

          <p className="mt-2 text-gray-500">
            EventOS Yönetim Paneli
          </p>

          <div className="mt-10 grid grid-cols-4 gap-6">
            <Card title="Toplam Üye" value="245" />
            <Card title="Etkinlik" value="12" />
            <Card title="Aidat Geliri" value="₺18.250" />
            <Card title="Bugünkü Giriş" value="89" />
          </div>
        </div>
      </section>
    </main>
  );
}