import Button from "../components/Button";
import Input from "../components/Input";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">
          EventOS
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Toplulukların Yönetim Platformu
          <Input
  label="E-posta"
  type="email"
  placeholder="E-posta adresinizi girin"
/>

<Input
  label="Şifre"
  type="password"
  placeholder="Şifrenizi girin"
/>
        </p>
        

        <Button
  text="Giriş Yap"
  href="/dashboard"
/>
       </div>
    </main>
  );
}