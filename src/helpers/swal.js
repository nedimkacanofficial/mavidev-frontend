import Swal from "sweetalert2";

export const question = (title, text) => {
  return Swal.fire({
    title,
    text,
    icon: 'question',
    showCancelButton: true,
  });
};

export const toast = (title, icon = "info", timer = 3000) => {
  Swal.fire({
    position: "center", // Ekranın ortasında görüntülemek için
    icon,
    title,
    toast: true, // Toast mesajı olarak görüntülemek için
    showConfirmButton: false,
    timer,
  });
};

