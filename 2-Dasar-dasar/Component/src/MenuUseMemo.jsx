import { useMemo, useState } from "react"

export default function MenuUseMemo() {
  const [count, setCount] = useState(0)
  const [other, setOther] = useState(0)

  // Fungsi berat
  const expensiveCalculation = (num) => {
    console.log("Menghitung...")
    let result = 0
    for (let i = 0; i < 1000000000; i++) {
      result += num
    }
    return result
  }

  // Gunakan useMemo agar hanya dihitung ulang saat `count` berubah
  const hasil = useMemo(() => expensiveCalculation(count), [count])

  return (
    <div>
      <p>Hasil: {hasil}</p>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>
      <button onClick={() => setOther(other + 1)}>Ubah Other</button>
    </div>
  )
}