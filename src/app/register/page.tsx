"use client";
import bglogin from "@/app/assets/bg-login.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import bglogindekstop from "@/app/assets/bg-login-dekstop.png";
import { useState } from "react";
import axios from "axios"; // Import axios
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertColor } from "@mui/material/Alert"; // Import MUI Alert with AlertColor
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setNama] = useState("");
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

    if (!isValid || !name || !password) {
      setAlertMessage("Harap isi semua kolom dengan benar."); // Set error message
      setAlertSeverity("error"); // Set alert severity to error
      setAlertOpen(true); // Show alert
      return;
    }

    setLoading(true); // Show Backdrop

    try {
      const response = await axios.post(
        "https://pertiga-be.vercel.app/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      if (response.status === 201) {
        setAlertMessage("Selamat Pendaftaran Berhasil!"); // Success message
        setAlertSeverity("success");
        setAlertOpen(true); // Show success alert
        setTimeout(() => {
          router.push("/"); // Redirect to home page after 2 seconds
        }, 2000);
      }
    } catch (error: unknown) {
      setLoading(false); // Hide Backdrop on error

      // Type narrowing for error
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          setAlertMessage("Email Sudah Terdaftar!"); // Specific message for status 400
        } else {
          setAlertMessage("Registrasi gagal. Coba lagi.");
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
    <>
      {/* Mobile */}
      <div
        className="overflow-hidden md:hidden block flex-col min-h-screen bg-cover bg-center bg-no-repeat"
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
          <h1 className="font-mons font-bold text-center text-5xl mt-24 text-accent">
            Register
          </h1>
          {/* form */}
          <div className="relative">
            <Box
              className="ml-7 mt-14"
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="on">
              <TextField
                id="name"
                type="text"
                label="Nama"
                variant="standard"
                value={name}
                onChange={(e) => setNama(e.target.value)}
                onKeyPress={(event) => {
                  const charCode = event.which ? event.which : event.keyCode;
                  // Only allow letters and spaces (A-Z, a-z, and space)
                  if (
                    !(charCode >= 65 && charCode <= 90) && // Uppercase letters (A-Z)
                    !(charCode >= 97 && charCode <= 122) && // Lowercase letters (a-z)
                    !(charCode === 32) // Space
                  ) {
                    event.preventDefault();
                  }
                }}
              />
              <TextField
                id="email"
                type="email"
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
              className="bg-accent w-[8rem] rounded-full font-pops text-lg ml-36 mt-6"
              onClick={handleSubmit} // Run function when button is clicked
            >
              Daftar
            </button>
          </div>
        </main>

        {/* Backdrop for loading */}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>

      {/* dekstop */}
      <div
        className="overflow-hidden hidden md:block flex-col min-h-screen bg-cover bg-center bg-no-repeat"
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
          <h1 className="font-mons font-bold text-center text-7xl mt-24 text-accent">
            Register
          </h1>
          {/* form */}
          <div className="flex items-center justify-center ">
            <div className="relative">
              <Box
                className="ml-7 mt-14 flex flex-col gap-y-14"
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "35ch" } }}
                noValidate
                autoComplete="on">
                <TextField
                  id="name"
                  type="text"
                  label="Nama"
                  variant="standard"
                  value={name}
                  onChange={(e) => setNama(e.target.value)}
                  onKeyPress={(event) => {
                    const charCode = event.which ? event.which : event.keyCode;
                    // Only allow letters and spaces (A-Z, a-z, and space)
                    if (
                      !(charCode >= 65 && charCode <= 90) && // Uppercase letters (A-Z)
                      !(charCode >= 97 && charCode <= 122) && // Lowercase letters (a-z)
                      !(charCode === 32) // Space
                    ) {
                      event.preventDefault();
                    }
                  }}
                />
                <TextField
                  id="email"
                  type="email"
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
                className="bg-accent w-[8rem] rounded-full font-pops border border-black hover:bg-primary  hover:text-white text-xl ml-36 mt-6"
                onClick={handleSubmit} // Run function when button is clicked
              >
                Daftar
              </button>
            </div>
          </div>
        </main>

        {/* Backdrop for loading */}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
}
