//Tạo một hàm getData:
export const getData = () => {
    return fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
      .then(res => res.json())
      .catch(err => {
        console.error("Lỗi khi gọi API:", err);
        return [];
      });
  };
  