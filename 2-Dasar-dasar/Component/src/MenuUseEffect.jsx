export default function MenuUseEffect(){
    const [hitung, setHitung] = useState(0)

      useEffect(() => {
        console.log("Komponen dirender atau hitung berubah")
      }, [hitung]) // dependensi

      return (
        <button onClick={() => setHitung(hitung + 1)}>
          Klik saya {hitung}
        </button>
      )
}