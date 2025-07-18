export default function LoopingMenu() {
  const styleLoopingMenu = {
    backgroundColor: "#FFEEA9",
    padding: "10px",
    color: "#000",
    borderRadius: "10px",
    marginBottom: "5px"
  }

  const Menu = [
    "Nasi Bakar",
    "Mie ayam",
    "Bakso",
  ]
  
  return (
    <>
      {
        Menu.map((item, index) => {
          return (
            <div style={styleLoopingMenu} key={index}>
              <div>Nama Menu <p>{item}</p></div>
            </div>
          )
        })
      }
    </>
  )
}
