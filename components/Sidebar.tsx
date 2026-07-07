import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-blue-700 text-white p-6">
      <h1 className="text-3xl font-bold mb-10">
        EventOS
      </h1>

      <nav className="flex flex-col gap-4">
        <Link href="/dashboard">🏠 Dashboard</Link>
        <Link href="/events">📅 Etkinlikler</Link>
        <Link href="/members">👥 Üyeler</Link>
        <Link href="/payments">💰 Aidatlar</Link>
        <Link href="/qr">🎫 QR Giriş</Link>
        <Link href="/announcements">📢 Duyurular</Link>
        <Link href="/settings">⚙️ Ayarlar</Link>
      </nav>
    </aside>
  );
}