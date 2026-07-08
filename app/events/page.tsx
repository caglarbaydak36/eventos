import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    title: "Kars Kültür Gecesi",
    date: "15 Ağustos 2026",
    location: "Darıca",
    type: "Kültür"
  },
  {
    title: "Düğün Organizasyonu",
    date: "20 Ağustos 2026",
    location: "Kocaeli",
    type: "Düğün"
  },
  {
    title: "Gençlik Buluşması",
    date: "5 Eylül 2026",
    location: "Gebze",
    type: "Sosyal"
  }
]

export default function EventsPage() {
  return (
    <main className="min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-8">
        Etkinlikler
      </h1>


      <div className="grid gap-6 md:grid-cols-3">

        {events.map((event,index)=>(
          <Card key={index}>

            <CardHeader>
              <CardTitle>
                {event.title}
              </CardTitle>
            </CardHeader>

            <CardContent>

              <p>
                📅 {event.date}
              </p>

              <p>
                📍 {event.location}
              </p>

              <Badge className="mt-4">
                {event.type}
              </Badge>

            </CardContent>

          </Card>
        ))}

      </div>

    </main>
  )
}
