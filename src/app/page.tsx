"use client";
import bglogin from "@/app/assets/bg-login.png";
import bglogindekstop from "@/app/assets/bg-login-dekstop.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios"; // Import axios
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert"; // Import MUI Alert with AlertColor
import { Link } from "@nextui-org/react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false); // State for Backdrop loading
  const [alertOpen, setAlertOpen] = useState(false); // State for Snackbar alert
  const [alertMessage, setAlertMessage] = useState(""); // Message for Snackbar alert
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>("success"); // Severity for Snackbar alert
  const router = useRouter(); // useRouter hook

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    setIsValid(validateEmail(value)); // Set valid if email matches regex
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default button behavior

    if (!isValid || !email || !password) {
      setAlertMessage("Harap isi semua kolom dengan benar."); // Set error message
      setAlertSeverity("error"); // Set alert severity to error
      setAlertOpen(true); // Show alert
      return;
    }

    setLoading(true); // Show Backdrop

    try {
      const response = await axios.post(
        "https://pertiga-be.vercel.app/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        setAlertMessage("Selamat Login Berhasil!"); // Success message
        setAlertSeverity("success");
        setAlertOpen(true); // Show success alert
        setTimeout(() => {
          router.push("/dashboard"); // Redirect to dashboard after 2 seconds
        }, 2000);
      }
    } catch (error: unknown) {
      setLoading(false); // Hide Backdrop on error

      // Type narrowing for error
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          setAlertMessage("Email atau Password salah!"); // Show error message for 401
        } else {
          setAlertMessage("Login gagal. Coba lagi.");
        }
        setAlertSeverity("error"); // Error alert
        setAlertOpen(true); // Show error alert
      } else {
        console.error("Error:", error);
        setAlertMessage("Terjadi kesalahan. Coba lagi.");
        setAlertSeverity("error"); // Set severity to error for unknown errors
        setAlertOpen(true);
      }
    } finally {
      setLoading(false); // Hide Backdrop
    }
  };

  return (
    <div>
      <div
        className=" md:hidden overflow-hidden block flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bglogin.src})`,
        }}>
        {/* Alert Snackbar di bagian atas */}
        <Snackbar
          open={alertOpen}
          autoHideDuration={2000}
          onClose={() => setAlertOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }} // Set alert di bagian atas
        >
          <MuiAlert
            onClose={() => setAlertOpen(false)}
            severity={alertSeverity} // Pass the AlertColor type to severity
            sx={{ width: "100%" }}>
            {alertMessage}
          </MuiAlert>
        </Snackbar>

        <main className="flex-grow">
          <h1 className="font-semibold text-accent font-mons text-3xl text-center mt-24">
            Selamat Datang
          </h1>
          <h2 className="font-mons font-bold text-center text-5xl mt-4 text-accent">
            Login
          </h2>
          {/* form */}
          <div className="relative">
            <Box
              className="ml-7 mt-14"
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "21ch" } }}
              noValidate
              autoComplete="on">
              <TextField
                id="email"
                label="Email"
                variant="standard"
                value={email}
                onChange={handleEmailChange}
                error={!isValid} // Show error message if email is invalid
                helperText={!isValid ? "Masukkan email yang valid" : ""}
              />
              <TextField
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <button
              className="bg-accent absolute top-16 w-[7rem] rounded-full text-4xl right-10"
              onClick={handleSubmit} // Run function when button is clicked
            >
              →
            </button>
          </div>
          {/* belum ada akun */}
          <div>
            <h3 className="mt-6 ml-8 font-pops text-xs">
              Belum punya Akun? Daftar Sekarang!
            </h3>
            <Link href="/register">
              <button className="bg-primary text-white font-pops text-[24px]  h-[3rem] rounded-full mt-2 ml-8 w-[10rem]">
                Register
              </button>
            </Link>
          </div>
        </main>

        {/* Backdrop for loading */}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>

      {/* dekstop  */}
      <div
        className="md:block hidden overflow-hidden  flex-col min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bglogindekstop.src})`,
        }}>
        {/* Alert Snackbar di bagian atas */}
        <Snackbar
          open={alertOpen}
          autoHideDuration={2000}
          onClose={() => setAlertOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "right" }} // Set alert di bagian atas
        >
          <MuiAlert
            onClose={() => setAlertOpen(false)}
            severity={alertSeverity} // Pass the AlertColor type to severity
            sx={{ width: "100%" }}>
            {alertMessage}
          </MuiAlert>
        </Snackbar>

        <main className="flex-grow">
          <h1 className="font-semibold text-accent font-mons text-5xl text-center mt-24">
            Selamat Datang
          </h1>
          <h2 className="font-mons font-bold text-center text-7xl mt-4 text-accent">
            Login
          </h2>
          {/* form */}
          <div className="flex items-center justify-center ">
            <div className="relative ">
              <Box
                className="ml-7 flex flex-col gap-y-14 mt-14"
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "31ch" } }}
                noValidate
                autoComplete="on">
                <TextField
                  size="medium"
                  id="email"
                  label="Email"
                  variant="standard"
                  value={email}
                  onChange={handleEmailChange}
                  error={!isValid} // Show error message if email is invalid
                  helperText={!isValid ? "Masukkan email yang valid" : ""}
                />
                <TextField
                  id="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="standard"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <button
                className="bg-accent hover:bg-primary hover:text-white absolute top-[9rem] w-[7rem] rounded-full text-4xl left-[22rem]"
                onClick={handleSubmit} // Run function when button is clicked
              >
                →
              </button>
            </div>
          </div>

          {/* belum ada akun */}
          <div className="flex items-center justify-center flex-col">
            <h3 className="mt-6   font-pops text-base">
              Belum punya Akun? Daftar Sekarang!
            </h3>
            <Link href="/register">
              <button className="bg-primary hover:text-black hover:bg-accent text-white font-pops text-[24px]  h-[3rem] rounded-full mt-2  w-[10rem]">
                Register
              </button>
            </Link>
          </div>
        </main>

        {/* Backdrop for loading */}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  );
}
