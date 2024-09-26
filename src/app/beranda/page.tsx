import bglogin from "@/app/assets/bg-login.png";

export default function Login() {
  return (
    <div>
      <div
        className=" md:hidden overflow-hidden block flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bglogin.src})`,
        }}>
        {/* Alert Snackbar di bagian atas */}

        <main className="flex-grow"></main>
      </div>
    </div>
  );
}
