import { supabase } from "@/lib/supabase";

export default async function MembersPage() {
  const { data: members, error } = await supabase
    .from("members")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <div>Hata: {error.message}</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Üyeler</h1>
          <p className="text-slate-500">
            Dernek üyelerini yönetin.
          </p>
        </div>

        <button className="rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">
          + Yeni Üye
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Ad Soyad</th>
              <th className="p-4 text-left">Telefon</th>
              <th className="p-4 text-left">E-Posta</th>
              <th className="p-4 text-left">Üye No</th>
              <th className="p-4 text-left">Durum</th>
            </tr>
          </thead>

          <tbody>
            {members?.map((member) => (
              <tr key={member.id} className="border-t hover:bg-slate-50">
                <td className="p-4 font-medium">{member.full_name}</td>
                <td className="p-4">{member.phone}</td>
                <td className="p-4">{member.email}</td>
                <td className="p-4">{member.membership_no}</td>
                <td className="p-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    {member.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}