import { useState, useEffect } from 'react';

// Tạo custom hook useGetData
const  useGetData = () => {
  const [data, setData] = useState([]); // Khởi tạo state để lưu danh sách sản phẩm
//Khởi tạo state data, mặc định là mảng rỗng, sẽ chứa danh sách sản phẩm.

// Dùng useEffect để gọi API khi component dùng hook này lần đầu render ([] là dependency rỗng
  useEffect(() => {
    fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
      .then((res) => res.json())
      .then((data) => setData(data)) // Khi có dữ liệu, nó cập nhật lại state, khiến RightContent render lại.
      .catch((err) => console.error("Lỗi API:", err));
  }, []);

  return data;
};

export default  useGetData;
