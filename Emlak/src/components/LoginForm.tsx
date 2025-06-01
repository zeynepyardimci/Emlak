import { useForm } from "react-hook-form";

type LoginFormInputs = {
  username: string;
  password: string;
};

const LoginForm: React.FC<{ onLogin: (data: LoginFormInputs) => void }> = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    onLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto p-4 border rounded shadow">
      <div className="mb-4">
        <label htmlFor="username" className="block mb-1 font-semibold">
          Kullanıcı Adı
        </label>
        <input
          id="username"
          {...register("username", { required: "Kullanıcı adı zorunludur" })}
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Kullanıcı adınızı girin"
        />
        {errors.username && (
          <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 font-semibold">
          Şifre
        </label>
        <input
          id="password"
          {...register("password", {
            required: "Şifre zorunludur",
            minLength: {
              value: 6,
              message: "Şifre en az 6 karakter olmalı",
            },
          })}
          className="w-full p-2 border rounded"
          type="password"
          placeholder="Şifrenizi girin"
        />
        {errors.password && (
          <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Giriş Yap
      </button>
    </form>
  );
};

export default LoginForm;
