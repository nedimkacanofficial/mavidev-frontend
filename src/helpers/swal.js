import Swal from "sweetalert2";

export const toast = (title, icon = "info", timer = 3000) => {
  Swal.fire({
    position: "center",
    icon,
    title,
    toast: true,
    showConfirmButton: false,
    timer,
  });
};

