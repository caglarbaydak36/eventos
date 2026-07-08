import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-3xl font-bold">
          Eventos
        </h1>

        <Button>
          Giriş Yap
        </Button>
      </header>


      {/* Hero */}
      <section className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6">

        <h2 className="max-w-3xl text-5xl font-bold tracking-tight">
          Hayalindeki etkinliği kolayca oluştur
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Düğün, nişan, konser, toplantı ve tüm organizasyonlarını
          Eventos ile tek platformdan yönet.
        </p>


        <div className="mt-8 flex gap-4">
          <Button size="lg">
            Etkinlik Oluştur
          </Button>

          <Button 
            size="lg" 
            variant="outline"
          >
            Etkinlikleri Keşfet
          </Button>
        </div>

      </section>


      {/* Features */}
      <section className="grid gap-6 px-8 pb-16 md:grid-cols-3">

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            🎉 Kolay Organizasyon
          </h3>

          <p className="mt-3 text-gray-600">
            Etkinliklerini dakikalar içinde oluştur,
            davetlilerini yönet.
          </p>
        </div>


        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            📅 Takvim Yönetimi
          </h3>

          <p className="mt-3 text-gray-600">
            Tarihleri, planları ve detayları tek yerde takip et.
          </p>
        </div>


        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold">
            👥 Davet Sistemi
          </h3>

          <p className="mt-3 text-gray-600">
            Misafirlerini kolayca davet et ve katılım durumlarını gör.
          </p>
        </div>

      </section>


      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © 2026 Eventos - Tüm hakları saklıdır.
      </footer>

    </main>
  )
}