// Ini namanya komponent (MenuResto)
export default function MenuResto() {
  const styleMenuResto = {
    backgroundColor: "#FF894F",
    padding: "10px",
    color: "#000",
    borderRadius: "10px",
    marginBottom: "5px"
  };

  const isMakanan = false;
  const isMinuman = true;

  return (
    <div style={styleMenuResto}>
      <div>
        <div>
          <p>Nama: Nasi Bakar</p>
        </div>

        //Ternary Operator
        {isMakanan == true ? (
          <div>Tipe: Makanan </div>
        ) : (
          <div>Tipe: yang lain</div>
        )}
        //AndAnd Operator tidak perlu ada elsenya
        {isMinuman == true && <div>Tipe: Minuman </div>}
      </div>
    </div>
  );
}
