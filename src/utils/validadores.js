export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePhone = (phone) => {
  return /^\d{9}$/.test(phone);
};

export const validateDNI = (dni) => {
  return /^\d{8}$/.test(dni);
};
