import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [data, setData] = useState('xxx')
  useEffect(() => {
    window.fetch('http://127.0.0.1:8000/umi.js').then(res => {
      console.log(res)
      setData('获取数据')
    })
  }, [])
  return (
    <div>
      {data}
    </div>
  );
}
