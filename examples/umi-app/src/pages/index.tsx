import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [data, setData] = useState('xxx')
  useEffect(() => {
    window.fetch('http://localhost:9999/favixxxxxxcon.ico').then(async (res) => {
      console.log(await res.text())
      setData('获取数据')
    })
  }, [])
  return (
    <div>
      {data}
    </div>
  );
}
