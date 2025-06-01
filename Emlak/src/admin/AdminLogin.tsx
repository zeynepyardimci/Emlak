import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type LoginFormInputs = {
  username: string;
  password: string;
};

type AdminLoginProps = {
  setIsAuth: (auth: boolean) => void;
};

const AdminLogin: React.FC<AdminLoginProps> = ({ setIsAuth }) => {
    const navigate = useNavigate();

    const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
     // MOCK VERİ ile kontrol
     const MOCK_USERNAME = "admin";
     const MOCK_PASSWORD = "Admin123";
    // Basit admin doğrulama
    if (data.username === MOCK_USERNAME && data.password === MOCK_PASSWORD) {
      setIsAuth(true);
      navigate("/admin");
    } else {
      alert("Kullanıcı adı veya şifre yanlış!");
    }
  };

  return (
    <div className="bg-tas min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-navbar p-8 rounded shadow-md w-80"
      >
        <h2 className="text-green-800 text-2xl font-bold mb-6 text-center">Admin Girişi</h2>

        <div className="mb-4">
          <label htmlFor="username" className="text-green-800 block mb-1 font-semibold">
            Kullanıcı Adı
          </label>
          <input
            id="username"
            type="text"
            {...register("username", { required: "Kullanıcı adı zorunlu" })}
            className="bg-emerald-50 w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.username && (
            <p className="text-red-600 mt-1 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="text-green-800 block mb-1 font-semibold">
            Şifre
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "Şifre zorunlu" })}
            className="bg-emerald-50 w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors.password && (
            <p className="text-red-600 mt-1 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

