import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CreateEventPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">

      <div className="mx-auto max-w-2xl">

        <Card>

          <CardHeader>
            <CardTitle className="text-3xl">
              Yeni Etkinlik Oluştur
            </CardTitle>
          </CardHeader>


          <CardContent>

            <div className="space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Etkinlik Adı
                </label>

                <Input 
                  placeholder="Örn: Kars Kültür Gecesi"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-medium">
                  Tarih
                </label>

                <Input 
                  type="date"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-medium">
                  Konum
                </label>

                <Input 
                  placeholder="Örn: Darıca"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-medium">
                  Açıklama
                </label>

                <Textarea
                  placeholder="Etkinlik detaylarını yaz..."
                  rows={5}
                />
              </div>


              <Button className="w-full">
                Etkinliği Oluştur
              </Button>


            </div>

          </CardContent>

        </Card>

      </div>

    </main>
  )
}